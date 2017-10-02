import { QueryHandler, Query, IScopedComponent, ConfigurationProperty, System, DynamicConfiguration, IRequestContext } from "vulcain-corejs";

@QueryHandler({ scope: '?' })
export class MyValueHandler implements IScopedComponent {
    context: IRequestContext;

    @ConfigurationProperty("myValue", "string")
    private myValue = DynamicConfiguration.getProperty<string>("myValue", "?????");

    @Query({ description: "Get property value", action: "value"})
    async getValue() {
        return this.myValue.value;
    }

}