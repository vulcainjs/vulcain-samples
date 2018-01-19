# Vulcain hystrix commands

Vulcain implements hystrix command providing same features.

See [hystrix wiki](https://github.com/Netflix/Hystrix/wiki/Configuration) for more information.

> Due to the mono thread node context, hystrix thread functionalities are ignored (and ```Collapser``` too).

## Running the sample

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


