import { EventHandler, EventData, ExposeEvent, Consume, AbstractEventHandler } from "vulcain-corejs";
import { Customer } from "../index";

// Define an event handler to subscribe to a specific action
@EventHandler({subscribeToDomain: "Sample" })
export class MyEventHandler extends AbstractEventHandler{
    
    @Consume({
        subscribeToSchema: "Customer",
        subscribeToAction: "create", // or '*' for any customer action
        filter: (o) => o.skip(1), // rxjs filter (here, skip the first event)
        description: "Subscribes to a customer creation event"
    })
    @ExposeEvent()    
    // This handler is called every time a customer is created except for the first one (cf filter)
    async onCustomerCreated(customer: Customer) { // Argument is eventData.value
        // You can access the underlying event with the property this.event
        this.context.logInfo(() => `Customer ${customer.firstName} ${customer.lastName} created.`);
    }
}