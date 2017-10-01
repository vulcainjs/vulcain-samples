import { Command, HttpDependency, AbstractHttpCommand } from "vulcain-corejs";
import * as crypto from 'crypto';

@Command({ executionTimeoutInMilliseconds: 1500 }) // Force a timeout
export class GetPostCommand extends AbstractHttpCommand {

    // Call an external api
    async runAsync(name: string) {
        // Get a post 
        let hash = crypto.createHash("md5").update(name).digest("hex");
        let v = Number.parseInt( hash, 16) % 100;
        let response = await this.getAsync("http://jsonplaceholder.typicode.com/posts/" + v);
        
        return response.body.body;
    }

    // Fallback method if error on runAsync
    // Ensures a value will be provided in case of error (or timeout)
    async fallbackAsync(a: number) {
        return "<nothing>";
    }
}