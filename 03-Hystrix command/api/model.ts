import { Model, Property, QueryHandler } from 'vulcain-corejs';

@Model()
@QueryHandler({scope: '?'})       // Anonymous access
export class Customer {
    @Property({ type: 'string', required: true })
    firstName: string;
    @Property({ type: 'string', required: true })
    lastName: string;
    @Property({ type: "uid" })
    id: string;
}