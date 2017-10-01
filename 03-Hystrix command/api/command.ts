import { Command, HttpDependency, AbstractHttpCommand } from "vulcain-corejs";
import { Customer } from "./model";

@Command({ executionTimeoutInMilliseconds: 2500 }) // Force a timeout
export class GetRandomNameCommand extends AbstractHttpCommand {

    // Call an external api
    async runAsync(region: string): Promise<Customer> {
        let response = await this.getAsync("https://uinames.com/api?region=" + region);
        let data = response.body;
        return <Customer>{ firstName: data.name, lastName: data.surname, id: data.name + data.surname };
    }

    // Fallback method if error on runAsync
    // Guarantee that a value will be provided in case of error (or timeout)
    // Get the same parameters than runAsync
    fallbackAsync(region: string): Customer  {
        return <Customer>{ firstName: "Nobody", lastName: "", id: (Math.random() * 100).toString() };
    }
}