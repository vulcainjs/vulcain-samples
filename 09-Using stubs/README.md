# Testing with stubs

This sample shows you how to use stubs to test service.
It uses the sample code from sample 03 generating random customer

### Registering a stub

You can register a stub by executing a service with :

- An environment variable ```SaveStubSession``` 
- A http header ```x-vulcain-save-stub-session```

By setting this property, service requests will be registered.

Variable takes a string with the following format:

- session-name[=filter]

Session name will be used as an identifier to save data.
An (optional) regex expression can be used to filter which service will be saved.

Since our sample has only one external request, we can use just the session name.

```bash
curl -XPOST --header "x-vulcain-save-stub-session: session1" http://localhost:8080/api/customer.random
```

By default, data is saved in vulcain.json file (Data stub provider can be used to persist data)

### Using stub session

To use a saved session, use :

- An environment variable ```UseStubSession``` 
- A http header ```x-vulcain-use-stub-session```

with the name of the session (and an optional filter)

Try it with:

```bash
curl -XPOST --header "x-vulcain-use-stub-session: session1" http://localhost:8080/api/customer.random
```

Every request will produce the same result.

> Note that stub headers are propagated accross requests. So you can stub any service in your request pipeline. For example, try to run sample 05, with the following header : "x-vulcain-save-stub-session: session1=^SampleService-1\.0$"
