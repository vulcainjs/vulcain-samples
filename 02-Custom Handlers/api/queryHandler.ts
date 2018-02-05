import { QueryHandler, QueryResult, Query, DefaultQueryHandler } from "vulcain-corejs";
import { Customer } from "./model";

// Extends default handler providing query functionalities (get and all)
@QueryHandler({ scope: '?', schema: "Customer" })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    
    // Add a new request
    @Query({ description: "Get customer fullnames", name: "fullNames", outputCardinality:"many", outputSchema: "string"})
    async getFullCustomerNames(): Promise<QueryResult> {
        let result = await super.getAll();
        result.value = result.value.map(c => c.firstName + " " + c.lastName);
        return result;
    }

    // Or you can override default methods
    async getAll() {
        return super.getAll();
    }
}