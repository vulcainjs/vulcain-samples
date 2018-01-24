import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { Service1Proxy, Customer } from "./service110";

@QueryHandler({ scope: '?' })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    
    @Query({description: "Returns a list of customer full names", action: "fullnames", outputType: "many", outputSchema: "string"})
    async getFullNames() {
        
        // Use the generated proxy class to call another service
        let proxy = new Service1Proxy(this.context);
        // Get all customer 
        let res = await proxy.getAllCustomer();
        // Transform result value
        return { ...res, value: res.value.map(c => c.firstName + " " + c.lastName) };
    }
}