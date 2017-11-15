# Minimal application

This minimal application provides a simple microservice implementing all vulcain fonctionalities like :

## Schema validation

Input data are validated automatically.

## Standardized protocol communication

* Two handlers (one for modifying and one for requesting) are generated based on the model schema respecting the [CQRS](https://martinfowler.com/bliki/CQRS.html) pattern
* API for modifying data use POST and query use GET.
* URL are standardized and are always the same format : /api/schema.action(?params)

Exemples:

To create a customer

```bash
curl -XPOST -d '{"firstName": "John", "lastName": "Doe"}' -H "Content-Type: application/json" http://localhost:8080/api/customer.create
```

> action can be create, update or delete (in this sample)

To read all customers

```bash
curl http://localhost:8080/api/customer.all
```

or with a filter

```bash
curl http://localhost:8080/api/customer.all?firstName=John
```

> By default, data are stored in memory. A mongo provider is available and can be enabled by config. See [this sample](../06%20-%20Adding%20persistence/Readme.md)

## Self-description

Each vulcain service exposes description metadata :

- Use ```http://localhost:8080/api/_swagger``` to get a swagger ui
- Use ```http://localhost:8080/api/_servicedependencies``` to display all dependencies
- Use ```http://localhost:8080/api/_servicedescription``` to display all metadata of the service (usefull to generate code)

### Monitoring

Vulcain service generates many types of metrics. By default :

- Prometheus metrics available with ```http://localhost:8080/metrics```  
- Hystrix metrics available with ```http://localhost:8080/hystrix.stream```  
