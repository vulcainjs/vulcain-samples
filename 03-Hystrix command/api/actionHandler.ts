import { ActionHandler, Action, DefaultActionHandler, CommandFactory } from "vulcain-corejs";
import { Customer } from "./model";
import { GetRandomNameCommand } from "./command";

// Custom action handler
// Extends default actions with a new action
@ActionHandler({ scope: '?', schema: "Customer" })
export class MyActionHandler extends DefaultActionHandler {
    
    // By default action name is the method name 
    // But you can force a name with the action annotation property
    // Annotation is used to declare metadata used by swagger ui for example and by vulcain internally.
    @Action({description: "Create a customer with random names", name: "random", outputSchema: "Customer"})
    async createRandomCustomer() {
        
        // The call to this command is guaranteed to get a response in less than 2500ms (as defined in the command's metadata)
        let cmd = CommandFactory.createCommand<GetRandomNameCommand>(this.context, "GetRandomNameCommand");
        let customer = await cmd.run("france");

        return super.create(customer);
    }
}