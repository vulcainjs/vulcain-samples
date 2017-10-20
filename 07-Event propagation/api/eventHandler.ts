import { EventHandler, EventData, Consume, AbstractEventHandler } from "vulcain-corejs";
import { Customer } from "../index";

@EventHandler({subscribeToDomain: "Sample" })
export class MyEventHandler extends AbstractEventHandler{

    @Consume({
        subscribeToSchema: "Customer",
        subscribeToAction: "create",
        filter: (o) => o.skip(1),
        description: "Subscribe when a customer is created"
    })
    onCustomerCreated(customer: Customer) { // Argument is eventData.value
        // You can access the underlying event whith the property this.event
        console.log(`Customer ${customer.firstName} ${customer.lastName} created.`)
    }
}