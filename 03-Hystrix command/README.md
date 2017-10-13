# Vulcain hystrix commands

Vulcain implements hystrix command and provides the same functionalities.

See [hystrix wiki](https://github.com/Netflix/Hystrix/wiki/Configuration) for more informations.

> Due to the mono thread node context, hystrix thread functionalities are ignored (and ```Collapser``` too).

# Running the sample

This sample creates a new query handler method returning user full names

## Create customers

```bash
curl -XPOST http://localhost:8080/api/customer.random
curl -XPOST http://localhost:8080/api/customer.random
curl -XPOST http://localhost:8080/api/customer.random
```

## Display results

```js
curl http://localhost:8080/api/customer.all
```


