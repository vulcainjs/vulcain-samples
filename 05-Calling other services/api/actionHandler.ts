import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { SampleServiceProxy, Customer } from "./sampleService10";

@QueryHandler({ scope: '?' })
export class MyActionHandler extends DefaultQueryHandler<Customer> {
    
    // Extends default actions with a new action
    // By default action name is the method name 
    // But you can force un name with the action annotation property
    @Query({description: "Returns a list of customer full names", action: "fullnames", outputSchema: "string"})
    async getFullNames() {
        
        let proxy = new SampleServiceProxy(this.context);
        let list = await proxy.getAllCustomer();
        return list.map(c => c.firstName + " " + c.lastName);
    }
}