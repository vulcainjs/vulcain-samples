import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { Service1Proxy, Customer } from "./service110";

@QueryHandler({ scope: '?' })
export class MyActionHandler extends DefaultQueryHandler<Customer> {
    
    // Extends default actions with a new action
    // By default action name is the method name 
    // But you can force un name with the action annotation property
    @Query({description: "Returns a list of customer full names", action: "fullnames", outputSchema: "string"})
    async getFullNames() {
        
        let proxy = new Service1Proxy(this.context);
        let res = await proxy.getAllCustomer();
        res.value = res.value.map(c => c.firstName + " " + c.lastName);
        return res;
    }
}