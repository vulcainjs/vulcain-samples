import { Command, HttpDependency, AbstractHttpCommand } from "vulcain-corejs";
import { Customer } from "./model";

// From sapmple 05
@Command({ executionTimeoutInMilliseconds: 2500 }) // Force a timeout
export class GetRandomNameCommand extends AbstractHttpCommand {

    // Call an external api
    async run(region: string): Promise<Customer> {
        let response = await this.get("https://uinames.com/api?region=" + region);
        let data = response.body;
        return <Customer>{ firstName: data.name, lastName: data.surname, id: data.name + data.surname };
    }

    fallback(region: string): Customer  {
        return <Customer>{ firstName: "Nobody", lastName: "", id: (Math.random() * 100).toString() };
    }
}