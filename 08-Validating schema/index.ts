import { Application, Model, Property, QueryHandler, ActionHandler, Validator, SchemaTypeDefinition, IRequestContext, VALIDATORS } from 'vulcain-corejs';

// Define and register a new custom type (or validator)
@SchemaTypeDefinition()
class Age {
    type = "number"; // Define a sub type (optional)
    // Custom property
    $min: number = 0;

    validate(val: number, context?: IRequestContext) {
        if (val < this.$min || val > 123)
            return "Age must be between {$min} and 123";
        return null;
    }

    // Optional coerce method
    // used to convert the input value
    // coerce(val): number { return val;}
}

@Model() 
export class Hobby {
    @Property({ type: "string", required: true })
    name: string;
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

    // Public (exposed) property must have a Property annotation to be validated and bounded
    @Property({ type: 'string', required: true, description: "First name" }) 
    @Validator(VALIDATORS.Length, { min: 4 }) 
    firstName: string;

    @Property({ type: 'string', required: true, description: "Last name" })
    @Validator("pattern", { pattern: /^[A-Z]\w*/ }) 
    lastName: string;

    // Custom type
    @Property({ type: "Age", required: true, typeProperties: { min: 10 } })
    age: number;

    @Property({ type: "uid", isKey: true }) // Create a new unique id if empty
    id: string;

    @Property({ type: "Hobby", cardinality: "many" })
    hobbies: Hobby[];
}

// Start service
let srv = new Application('Sample').enableGraphQL();
srv.start(8080);