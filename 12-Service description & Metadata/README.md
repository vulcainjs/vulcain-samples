# Metadata

Every service automatically exposes some metadata availables via endpoint:

## Service description

```bash
curl http://localhost:8080/api/_servicedescription
```

or

```bash
curl http://localhost:8080/api/_servicedescription?format=swagger
```

## Service dependencies

```bash
curl http://localhost:8080/api/_servicedependencies
```

## Swagger ui

```bash
curl http://localhost:8080/api/_swagger
```

## Schemas

```bash
curl http://localhost:8080/api/_schemas
```

