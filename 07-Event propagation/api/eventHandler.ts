import { EventHandler, EventData, Consume, AbstractEventHandler } from "vulcain-corejs";
import { Customer } from "../index";

// Define an event handler to subscribe to a specific action
@EventHandler({subscribeToDomain: "Sample" })
export class MyEventHandler extends AbstractEventHandler{
    
    @Consume({
        subscribeToSchema: "Customer",
        subscribeToAction: "create", // or '*' for any customer action
        filter: (o) => o.skip(1), // rxjs filter (here, skip the first event)
        description: "Subscribe when a customer is created"
    })
    // This handler is called every time a customer is created except for the first one (cf filter)
    onCustomerCreated(customer: Customer) { // Argument is eventData.value
        // You can access the underlying event with the property this.event
        console.log(`Customer ${customer.firstName} ${customer.lastName} created.`)
    }
}