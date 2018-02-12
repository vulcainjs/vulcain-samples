import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import Dashboard from './Dashboard';
import vulcainRestClient from './vulcain/restClient'
import errorSagas from './vulcain/saga';

import PostIcon from 'material-ui/svg-icons/action/book';

// To add a new resource generated with pastaga uncomment the following line and 
// the Resource line in the Admin component. 
// Do not forget to update urlMappings object
import {CustomerCreate, CustomerEdit, CustomerList} from './sampleService.Components.js'

// Url mappings by resource name
const urlMappings = {
  customer: 'http://localhost:8080/api' // localhost:8080 and http://localhost:8080 are also valid
  //default: 'default url'
};

const App = () => (
  <Admin dashboard={Dashboard} restClient={vulcainRestClient(urlMappings)} customSagas={[errorSagas]}>
      <Resource name="customer" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={PostIcon} remove={Delete} /> 
    </Admin>
);

export default App;
