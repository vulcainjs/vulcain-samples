# Event propagation

Every vulcain action generates an event which can be taken into account by an event handler.

Events are sent over a message bus and can be subscribed to in many service instances by implementing an event handler.

Event contains result action and can be filtered by domain, schema, action and custom filter using [rxjs](http://reactivex.io/) 

By default, if no message bus is defined, vulcain uses a simple memory bus to propagate event in the current instance (useful for testing)

If you want a more robust and multi instance event propagation, you can use the built-in ```rabbitmq``` provider.

**Run a rabbitmq instance**

```bash
docker run -d --hostname my-rabbit --name rabbit -p 15672:15672 -p 5672:5672 rabbitmq:management-alpine
```

**Configure it in the service**

```js
let srv = new Application('Sample')
    .useRabbitmqBus("localhost");
```
