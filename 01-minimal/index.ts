import { Application, Model, Property, QueryHandler, ActionHandler } from 'vulcain-corejs';

@Model()
@ActionHandler({ scope: '?' })    
@QueryHandler({scope: '?'})    
class Customer {
    @Property({type:'string', required: true})
    firstName: string;
    @Property({ type: 'string', required: true })
    lastName: string;
}

let srv = new Application('Sample');
srv.start(8080);