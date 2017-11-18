import { ActionHandler, Action, DefaultActionHandler } from "vulcain-corejs";
import { Customer } from "./model";
import { GetRandomNameCommand } from "./command";
import { CommandFactory } from "../../../vulcain-corejs/dist/commands/commandFactory";

@ActionHandler({ scope: '?', schema: "Customer" })
export class MyActionHandler extends DefaultActionHandler {
    
    // Extends default actions with a new action
    // By default action name is the method name 
    // But you can force un name with the action annotation property
    @Action({description: "Create a customer with random names", action: "random", outputSchema: "Customer"})
    async createRandomCustomer() {
        
        // The call to this command is guaranted to get a response in less than 2500ms
        let cmd = CommandFactory.createCommand<GetRandomNameCommand>(this.context, "GetRandomNameCommand");
        let customer = await cmd.run("france");

        return super.create(customer);
    }
}