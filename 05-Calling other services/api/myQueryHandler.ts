import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { Service1Proxy, Customer } from "./service110";

@QueryHandler({ scope: '?' })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    
    // This query return a customer full names list
    @Query({description: "Returns a list of customer full names", action: "fullnames", outputType: "many", outputSchema: "string"})
    async getFullNames(query?) {
        
        // Use the generated proxy class to call another service
        let proxy = new Service1Proxy(this.context);
        // Get all customers 
        let res = await proxy.getAllCustomer(query);
        // Transform result value
        return { ...res, value: res.value.map(c => c.firstName + " " + c.lastName) };
    }
}