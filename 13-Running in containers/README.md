# Running in containers

```bash
docker build -t simpleservice:1.0 .
docker run -d -p 8080:8080 --name simpleservice1-0 simpleservice:1.0
```

## Generating deployment files

You can use [Apotek](https://github.com/malain/apotek) to generate a deployment file for a vulcain service

Example for Kubernetes

```js
apotek generate --template kubernetes
```
