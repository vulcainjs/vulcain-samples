import { ActionHandler, Action, DefaultActionHandler, CommandFactory } from "vulcain-corejs";
import { Customer } from "./model";
import { GetRandomNameCommand } from "./command";

// From sample 05
@ActionHandler({ scope: '?', schema: "Customer" })
export class MyActionHandler extends DefaultActionHandler {
    
    @Action({description: "Create a customer with random names", action: "random", outputSchema: "Customer"})
    async createRandomCustomer() {
        
        let cmd = CommandFactory.createCommand<GetRandomNameCommand>(this.context, "GetRandomNameCommand");
        let customer = await cmd.run("france");

        return super.create(customer);
    }
}