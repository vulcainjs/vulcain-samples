import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { SampleServiceProxy, Customer } from "./sampleService10";

@QueryHandler({ scope: '?' })
export class MyActionHandler extends DefaultQueryHandler<Customer> {
    
    // Extends default actions with a new action
    // By default action name is the method name (without Async suffix if any)
    // But you can force un name with the action annotation property
    @Query({description: "Returns a list of customer full names", action: "fullnames", outputSchema: "string"})
    async getFullNames() {
        
        let proxy = new SampleServiceProxy(this.context);
        let list = await proxy.getAllCustomerAsync();
        return list.map(c => c.firstName + " " + c.lastName);
    }
}