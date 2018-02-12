import { Application, Model, Property, QueryHandler, ActionHandler, Validator } from 'vulcain-corejs';

@Model()
@ActionHandler({ scope: '?' })    
@QueryHandler({scope: '?'})    
class Customer {
    @Property({ type: 'string', required: true })
    @Validator("length", {min:4})    
    firstName: string;
    @Property({ type: 'string', required: true })
    lastName: string;
    @Property({ type: "uid" }) // Create a new unique id if empty
    id: string;
}

let srv = new Application('Sample')
    //.useMemoryProvider("data")    // Persist memory data into 'data' folder 
    // Or use the simple built-in mongodb provider
    .useMongoProvider("localhost");

srv.start(8080);