import { QueryHandler, Query, IScopedComponent, ConfigurationProperty, System, DynamicConfiguration, IRequestContext } from "vulcain-corejs";

@QueryHandler({ scope: '?' })
export class MyValueHandler implements IScopedComponent {

    context: IRequestContext;

    // Define a dynamic property with a default value
    @ConfigurationProperty("MyValue", "string")
    private myValue = DynamicConfiguration.getProperty<string>("MyValue", "?????");

    @Query({ description: "Get property value", action: "value" })
    async getValue() {
        // Returns the property value
        return this.myValue.value;
    }
}