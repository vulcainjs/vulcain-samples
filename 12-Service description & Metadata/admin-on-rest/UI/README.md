## Admin On Rest template

Simple template for using [Admin On Rest](https://marmelab.com/admin-on-rest/) with (vulcain)(http://www.vulcainjs.org/) services.

This project was initially bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Use [Pastaga](https://github.com/malain/pastaga) to generate components from [vulcain](http://www.vulcainjs.org/) services.

## How to add service component

1. go to src folder or any folder you want generate components
2. Generate component from a running vulcain service.

Example for a service running on localhost:8080

```js
pastaga generate --template adminOnRest --address http://localhost:8080
```

3. In **App.js**,

- import the generated file
- And add resource line inside **Admin** tag.

See [Admin On Rest documentation](https://marmelab.com/admin-on-rest/index.html) for more customization.
