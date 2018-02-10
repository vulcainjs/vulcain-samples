# Dynamic properties

You can set a value to a property in several ways.

- As an environment variable named MyValue or with its alias myvalue or MY_VALUE
- As a kubernetes or docker secret file
- In the configuration file **vulcain.json** in the **config** property.
- With an external http source, A default vulcain server is provided in a docker container and can be used for testing.

> Dynamic properties can be updated at runtime and changes are automatically propagated (every 60s by default)

## How to use vulcain configuration server

You can see more info about this configuration server on [github](https://github.com/vulcainjs/vulcain-configurations)

1. Run the server with docker

```bash
docker run -d -p 9090:8080 vulcain/configurations-server
```

2. Declare an environment variable when running your service named **VulcainServer**

ex: VulcainServer: "localhost:9090"

and run the current service.

> If you use vscode, you can add it in the .vscode/launch.json file

3. You can add or modify configuration values with the standardized vulcain api.

```bash
curl -XPOST http://localhost:9090/api/configuration.create -d '{"key":"MyValue", "value":"any value", "global": true}'
```

4. Test the property value

```bash
curl http://localhost:8080/api/value
```
