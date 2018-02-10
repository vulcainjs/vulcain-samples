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

or just declare a ```mongo``` environment variable (mongo=localhost).

You can also just use the memory provider with file persistence (This is the default provider but without file persistence)

```js
let srv = new Application('Sample')
    .useMemoryProvider("dataFolder");
```

Memory provider tries to provide the same features than the mongodb provider simulating its query model.

> Do not use it for production, all data is saved on file on **every** change!
