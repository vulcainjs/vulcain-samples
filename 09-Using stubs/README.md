# Testing with stubs

This sample shows you how to use stubs for a service.
It uses the sample code from sample 03 generating random customer

### Registering a stub

You can tell vulcain to register a stub with :

- An environment variable ```SaveStubSession``` 
- A http header ```x-vulcain-save-stub-session```

Variable takes a string with the following format:

- session-name[=filter]

Session name will be use to save data.
An (optional) regex expression to filter which request will be saved.

Since our sample has only one external request, we can use just the session name.

```bash
curl -XPOST --header "x-vulcain-save-stub-session: session1" http://localhost:8080/api/customer.random
```

By default, data are saved in vulcain.json file (Data provider can be used to persist data)

### Using stub session

To use a saved session, use :

- An environment variable ```UseStubSession``` 
- A http header ```x-vulcain-use-stub-session```

with the name of the session (and an optional filter)

Try it with:

```bash
curl -XPOST --header "x-vulcain-use-stub-session: session1" http://localhost:8080/api/customer.random
```

> Note that stub header are propagated between requests. So you can stub any service in your request pipeline. For example, try to run sample 05, with the following header : "x-vulcain-save-stub-session: session1=^SampleService-1\.0$"


