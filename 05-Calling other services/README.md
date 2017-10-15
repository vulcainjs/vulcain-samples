# Calling other service

This sample shows you how to generate a proxy to call another service using hystrix command.

## Run the target service

Run the service number 03 and create some random customers with :

```bash
curl -XPOST http://localhost:8080/api/customer.random
```

## Generate the proxy

You need to install vulcain cli to generate the proxy.

```bash
npm install -g vulcain-cli
```

then go to the api folder and run the generate command

```bash
cd 05-Calling other services/api
vulcain generate http://localhost:8080
```

This command uses metadata provided by each service to generate a new class based on a template.
Default template is available [here](https://github.com/vulcainjs/vulcain-code-generation-templates/tree/master/microServiceProxy)

Then you can run the sample with :

```js
curl http://localhost:8080/api/customer.fullnames
```

If you want to see metrics and trace, run the sample after configuring the two services like describe in the [section 10](../10-Monitoring & Metrics/Readme.md)
