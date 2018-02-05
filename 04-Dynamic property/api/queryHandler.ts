import { QueryHandler, Query, IScopedComponent, ConfigurationProperty, DynamicConfiguration, IRequestContext } from "vulcain-corejs";

@QueryHandler({ scope: '?' })
export class MyValueHandler implements IScopedComponent {

    context: IRequestContext;

    // Define a dynamic property with a default value
    @ConfigurationProperty("MyValue", "string")
    private myValue = DynamicConfiguration.getProperty<string>("MyValue", "?????");

    @Query({ description: "Get property value", name: "value" })
    async getValue() {
        // Returns the property value
        return this.myValue.value;
    }
}