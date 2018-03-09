import { ActionHandler, Action, DefaultActionHandler, CommandFactory } from "vulcain-corejs";
import { Customer } from "./model";
import { GetRandomNameCommand } from "./command";

// From sample 05
@ActionHandler({ scope: '?', schema: "Customer" })
export class MyActionHandler extends DefaultActionHandler {
    
    @Action({description: "Create a customer with random names", name: "random", outputSchema: "Customer"})
    async createRandomCustomer() {
        
        let cmd = new GetRandomNameCommand(this.context);
        let customer = await cmd.run("france");

        return super.create(customer);
    }
}