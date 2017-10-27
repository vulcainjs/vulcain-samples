# Event propagation

Every vulcain action generates an event which can be take into account by an event handler.
Events are send over a message bus and can be subscribed by using rxjs in many service instances.

Event contains result action and can be filtered by domain, schema and action.

By default, if any message bus is defined, vulcain uses a simple memory bus to propagate event in the current instance.

If you want a more robust and multi instance event propagation, you can use the built-in ```rabbitmq``` provider.

**Run a rabbitmq instance**

```bash
docker run -d --hostname my-rabbit --name some-rabbit rabbitmq:3
```

**Configure it in the service**

```js
let srv = new Application('Sample')
    .useRabbitmqBus("localhost");
```