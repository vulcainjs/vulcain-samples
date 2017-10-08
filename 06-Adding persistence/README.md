# Adding persistence

This sample shows how to use the built-in mongodb provider.

Start a mongodb instance

```bash
docker run -d -p 27017:27017 mongo
```

And declare it in the startup code

```js
let srv = new Application('Sample')
    .useMongoProvider("localhost");
```

You can also just use the memory provider with file persistence.

```js
let srv = new Application('Sample')
    .useMemoryProvider("dataFolder");
```

Memory model try to provide the same functionalities than the mongodb provider simulating its query model.

> Do not use it for production, all data are saved on file on **every** change.
