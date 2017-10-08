import { Application, Model, Property, QueryHandler, ActionHandler, Validator, SchemaTypeDefinition, IRequestContext } from 'vulcain-corejs';

// Define and register a new custom type
@SchemaTypeDefinition()
class Age {
    type: string;

    constructor() {
        this.type = "number"; // Define a sub type (optional)
    }

    validate(val: number, context: IRequestContext) {
        if (val < 0 || val > 123)
            return "Invalid age for property {$propertyName}";
        return null;
    }

    // Optional bind method
    // use to convert the input value
    // bind(val): number { return val;}
}


@Model({ validate: Customer.validate})
@ActionHandler({ scope: '?' })    // Anonymous access
@QueryHandler({scope: '?'})       // Anonymous access
class Customer {

    // Entity validation
    static validate(entity: Customer, context: IRequestContext): string {
        if (entity.firstName === entity.lastName)
            return "Invalid customer name";
        return;
    }

    @Property({ type: 'string', required: true, description: "First name" }) 
    @Validator("length", { min: 4 }) // Default validator
    firstName: string;

    @Property({ type: 'string', required: true, description: "Last name" })
    @Validator("pattern", { pattern: /^[A-Z]\w*/ }) // Default validator
    lastName: string;

    // Custom type
    @Property({type: "Age", required: true})
    age: number;

    @Property({ type: "uid" }) // Create a new unique id if empty
    id: string;
}

// Start service
let srv = new Application('Sample');
srv.start(8080);