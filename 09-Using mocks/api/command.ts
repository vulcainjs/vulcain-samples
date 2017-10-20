import { Command, HttpDependency, AbstractHttpCommand } from "vulcain-corejs";
import { Customer } from "./model";

// Declare a hystrix command and override some command properties
@Command({ executionTimeoutInMilliseconds: 2500 }) // Force a timeout
export class GetRandomNameCommand extends AbstractHttpCommand {

    // Call an external api
    async run(region: string): Promise<Customer> {
        // Call an external api providing random user names
        let response = await this.get("https://uinames.com/api?region=" + region);
        let data = response.body;
        return <Customer>{ firstName: data.name, lastName: data.surname, id: data.name + data.surname };
    }

    // Fallback method if error on run
    // Guarantee that a value will be provided in case of error (or timeout)
    // Get the same parameters than run
    // This is an optional method
    fallback(region: string): Customer  {
        return <Customer>{ firstName: "Nobody", lastName: "", id: (Math.random() * 100).toString() };
    }
}