import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { Customer } from "./model";

// Extends default handler providing query functionalities (get and all)
@QueryHandler({ scope: '?', schema: "Customer" })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    
    // Add a new request
    @Query({ description: "Get customer fullnames", action: "fullNames"})
    async getFullCustomerNames() {
        let list = await super.getAllAsync();
        return list.map(c => c.firstName + " " + c.lastName);
    }

    // Or you can override default methods
    async getAllAsync() {
        return super.getAllAsync();
    }
}