# Vulcain hystrix commands

Vulcain implements all hystrix command features.

See [hystrix wiki](https://github.com/Netflix/Hystrix/wiki/Configuration) for more information.

> Due to the mono thread node context, hystrix thread functionalities are ignored (and ```Collapser``` too).

## Running the sample

This sample uses a command to make an external call to a open api providing random names.
If the request makes more than 2500ms a default response is return.

> In this sample, an error is also raises randomly to simulate an error.

This command inherits from ```AbstractHttpCommand``` but you can create your own command by inheriting from ```AbstractCommand```.
Other default command implementations are ```AbstractProviderCommand``` for making database requests and ```AbstractServiceCommand``` for calling another vulcain service


### Create customers

You can create some customers with the following lines

```bash
curl -XPOST http://localhost:8080/api/customer.random
```

This action creates a new customer with random names from an external api.
Sometimes (randomly) the command failed and runs the fallback.

### Display results

```js
curl http://localhost:8080/api/customer.all
```
