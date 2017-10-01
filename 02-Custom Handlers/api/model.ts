import { Model, Property, ActionHandler } from 'vulcain-corejs';

@Model()
@ActionHandler({ scope: '?' })        
export class Customer {
    @Property({ type: 'string', required: true })
    firstName: string;
    @Property({ type: 'string', required: true })
    lastName: string;
    @Property({ type: "uid" })
    id: string;
}