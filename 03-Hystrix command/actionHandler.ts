import { ActionHandler, Action, DefaultActionHandler } from "vulcain-corejs";
import { Customer } from "./model";
import { GetPostCommand } from "./command";

@ActionHandler({ scope: '?', schema: "Customer" })
export class MyActionHandler extends DefaultActionHandler {
    
    // Override default create action for adding a post to every customer
    async createAsync(customer: Customer) {
        let cmd = this.context.getCommand<GetPostCommand>("GetPostCommand");
        let post = await cmd.runAsync(customer.firstName);
        customer.post = post;
        return super.createAsync(customer);
    }
}