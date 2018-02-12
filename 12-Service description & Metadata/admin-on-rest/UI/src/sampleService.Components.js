//
// Code generated with pastaga (https://github.com/malain/pastaga)
// 

import React from 'react';
// eslint-disable-next-line
import * as aor from 'admin-on-rest';

const required = value => value ? undefined : 'Required';

export const CustomerList = (props) => (
    <aor.List title="Customer list" {...props}>
        <aor.Datagrid>
            
            <aor.TextField source="firstName"/>
            
            <aor.TextField source="lastName"/>
            
            <aor.TextField source="id"/>
            
            <aor.EditButton/>
        </aor.Datagrid>
    </aor.List>
);

const CustomerTitle = ({ record }) => {
    return record.id ? <span>Customer {record ? `"${record.id}"` : ''}</span> : <span>Customer</span>;
};

export const CustomerEdit = (props) => (
    <aor.Edit title={<CustomerTitle />} {...props}>
        <aor.SimpleForm>
            
            <aor.TextInput source="firstName"   validate={[required ]}/>
            
            <aor.TextInput source="lastName"   validate={[required ]}/>
            
            <aor.DisabledInput source="id" />
            
        </aor.SimpleForm>
    </aor.Edit>
);

export const CustomerCreate = (props) => (
    <aor.Create {...props}>
        <aor.SimpleForm>

            <aor.TextInput source="firstName"   validate={[required ]}/>
            
            <aor.TextInput source="lastName"   validate={[required ]}/>
            
            
            
        </aor.SimpleForm>
    </aor.Create>
);
