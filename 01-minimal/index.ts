import { Application, Model, Property, QueryHandler, ActionHandler } from 'vulcain-corejs';

// Declare a schema with default handlers for query (Get, All) and actions (create, delete, update)
@Model()
@ActionHandler({ scope: '?' })    // ? meaning Anonymous access
@QueryHandler({scope: '?'})       // ? meaning Anonymous access
class Customer {
    @Property({type:'string', required: true}) 
    firstName: string;
    @Property({ type: 'string', required: true })
    lastName: string;
    @Property({ type: "uid", isKey: true }) // Create a new unique id if empty
    id: string;
}

// Start service
let srv = new Application('Sample')
                .enableGraphQL();
srv.start(8080);