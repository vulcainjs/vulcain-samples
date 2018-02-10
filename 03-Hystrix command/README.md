# Vulcain hystrix commands

Vulcain implements all hystrix command features.

See [hystrix wiki](https://github.com/Netflix/Hystrix/wiki/Configuration) for more information.

> Due to node's single thread context, hystrix threading functionalities are ignored (as well as ```Collapser```).

## Running the sample

This sample uses a command to make an external call to an external api providing random names.
If the request takes more than 2500ms a default response is then returned.

> In this sample, an error is also raised randomly to simulate an error.

This command inherits from ```AbstractHttpCommand``` but you can create your own command by inheriting from ```AbstractCommand```.
Other default command implementations are ```AbstractProviderCommand``` to make database requests and ```AbstractServiceCommand``` to call another vulcain service


### Create customers

You can create some customers with the following lines

```bash
curl -XPOST http://localhost:8080/api/customer.random
```

This action creates a new customer with random names from an external api.
Sometimes (randomly) the command fails and returns a fallback response.

### Display results

```js
curl http://localhost:8080/api/customer.all
```
