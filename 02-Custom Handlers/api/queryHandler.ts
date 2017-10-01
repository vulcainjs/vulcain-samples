import { QueryHandler, Query, DefaultQueryHandler } from "vulcain-corejs";
import { Customer } from "./model";

@QueryHandler({ scope: '?', schema: "Customer" })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    
    @Query({ description: "Get customer fullnames"})
    async getFullCustomerNames() {
        let list = await super.getAllAsync();
        return list.map(c => c.firstName + " " + c.lastName);
    }

    // Or you can override default methods
    async getAllAsync() {
        return super.getAllAsync();
    }
}