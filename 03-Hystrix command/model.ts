import { Model, Property } from 'vulcain-corejs';

@Model()
export class Customer {
    @Property({ type: 'string', required: true })
    firstName: string;
    @Property({ type: 'string', required: true })
    lastName: string;
    // This property is private 
    post: string;
}