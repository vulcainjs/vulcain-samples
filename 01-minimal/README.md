# Minimal application

This minimal application provides a simple microservice implementing all vulcain fonctionalities:

## Schema validation

Data are validated and raise BadRequest in case of error

## Standardized protocol

* Two handlers (one for modifying and one for requesting) are generated based on the model schema.
* API for modifying data use POST and query use GET.
* URL are standardized and are always the same format : /api/schema.action(?params)

Exemples:

To create a customer

```bash
curl -XPOST -d '{"firstName": "John", "lastName": "Doe"}' -H "Content-Type: application/json" http://localhost:8080/api/customer.create
```

> verb can be create, update or delete

To read all customers

```bash
curl http://localhost:8080/api/customer.all
```

or with a filter

```bash
curl http://localhost:8080/api/customer.all?firstName=John
```

> Without any specification, data are stored in memory a mongo provider is available and can be enabled by config.

## Service description

Every vulcain service exposes many informations:

- Use ```http://localhost:8080/api/_swagger``` to get a swagger ui
- Use ```http://localhost:8080/api/_servicedependencies``` to display all dependencies
- Use ```http://localhost:8080/api/_servicedescription``` to display all metadata of the service usefull to generate code

### Monitoring

Vulcain service generates many types of metrics by default

Promotheus metrics availables whith ```http://localhost:8080/metrics```  
Hystrix metrics availables with ```http://localhost:8080/hystrix.stream```  
