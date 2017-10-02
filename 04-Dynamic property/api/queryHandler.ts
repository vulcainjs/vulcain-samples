import { QueryHandler, Query, DefaultQueryHandler, ConfigurationProperty, System, DynamicConfiguration } from "vulcain-corejs";
import { Customer } from "./model";

@QueryHandler({ scope: '?', schema: "Customer" })
export class MyQueryHandler extends DefaultQueryHandler<Customer> {
    @ConfigurationProperty("myValue", "string")
    private myValue = DynamicConfiguration.asProperty<string>("myValue", "?????");

    @Query({ description: "Get property value", action: "value"})
    async getValue() {
        return this.myValue.value;
    }

}