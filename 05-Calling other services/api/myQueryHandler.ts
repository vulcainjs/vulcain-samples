import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { SampleServiceProxy, Customer } from "./sampleService10";

@QueryHandler({ scope: '?' })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    
    // This query return a customer full names list
    @Query({description: "Returns a list of customer full names", name: "fullnames", outputCardinality: "many", outputSchema: "string"})
    async getFullNames(query?) {
        
        // Use the generated proxy class to call another service
        let proxy = new SampleServiceProxy(this.context);
        // Get all customers 
        let res = await proxy.getAllCustomer(query);
        // Transform result value
        return { ...res, value: res.value.map(c => c.firstName + " " + c.lastName) };
    }
}