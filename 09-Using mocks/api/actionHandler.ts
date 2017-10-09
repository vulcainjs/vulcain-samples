import { ActionHandler, Action, DefaultActionHandler } from "vulcain-corejs";
import { Customer } from "./model";
import { GetRandomNameCommand } from "./command";

@ActionHandler({ scope: '?', schema: "Customer" })
export class MyActionHandler extends DefaultActionHandler {
    
    // Extends default actions with a new action
    // By default action name is the method name (without Async suffix if any)
    // But you can force un name with the action annotation property
    @Action({description: "Create a customer with random names", action: "random", outputSchema: "Customer"})
    async createRandomCustomerAsync() {
        
        // The call to this command is guaranted to get a response in less than 2500ms
        let cmd = this.context.getCommand<GetRandomNameCommand>("GetRandomNameCommand");
        let customer = await cmd.runAsync("france");

        return super.createAsync(customer);
    }
}