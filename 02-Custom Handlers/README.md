# Custom handler

This sample creates a new query handler method returning user full names

## Create customers

```bash
curl -XPOST -d '{"firstName": "John", "lastName": "Lennon"}' -H "Content-Type: application/json" http://localhost:8080/api/customer.create
curl -XPOST -d '{"firstName": "Paul", "lastName": "McCartney"}' -H "Content-Type: application/json" http://localhost:8080/api/customer.create
curl -XPOST -d '{"firstName": "Ringo", "lastName": "Starr"}' -H "Content-Type: application/json" http://localhost:8080/api/customer.create
curl -XPOST -d '{"firstName": "Georges", "lastName": "Harrison"}' -H "Content-Type: application/json" http://localhost:8080/api/customer.create
```

## Display results

```js
curl http://localhost:8080/api/customer.fullnames
```

