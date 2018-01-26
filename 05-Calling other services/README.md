# Calling other service

This sample shows you how to generate a proxy to call another service using hystrix command.

## Run the target service

Run the service number 03 and create some random customers with :

```bash
curl -XPOST http://localhost:8080/api/customer.random
```

## Generate the proxy

You need to install [Pastaga](https://github.com/malain/pastaga) to generate the proxy.

```bash
npm install -g pastaga
```

> Pastaga is a very simple and useful tool for creating shared custom command. It has been created initially to be use with **vulcainjs** but you can use for your specific needs.

then run the generate command to create a service proxy in the api folder

```bash
cd 05-Calling other services/api
pastaga generate --template proxy --address http://localhost:8080
npm run build
```

This command uses metadata provided by any vulcain service to generate a new class based on a template. This metadata are available with :

```js
curl http://localhost:8081/api/_servicedescription
```

Default template is available [here](https://github.com/vulcainjs/vulcain-code-generation-templates/tree/master/generate/proxy)

Then you can run the sample with :

```js
curl http://localhost:8081/api/fullnames
```

If you want to see metrics and trace, run the sample after configuring the two services like describe in [section 10](../10-Instrumentations/README.md)
