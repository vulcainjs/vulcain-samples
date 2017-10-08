# Monitoring

## Using zipkin

Vulcain generates zipkin trace with correlation id between multiple requests.

Run local zipkin server

```bash
docker run -d -p 9411:9411 openzipkin/zipkin
```

Start service with one environment variable named ```zipkin```

Exemple in launch.json

```js
  "env": {
    "VULCAIN_SERVICE_NAME": "SAMPLE",
    "VULCAIN_SERVICE_VERSION": "1.0",
    "zipkin": "localhost"
    }
```

Go to zipkin dashboard on ```localhost:9411```

## Using prometheus

```bash
docker run -p 9090:9090 -d -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
````

Exemple in launch.json

```js
  "env": {
    "VULCAIN_SERVICE_NAME": "SAMPLE",
    "VULCAIN_SERVICE_VERSION": "1.0",
    "prometheus": "localhost"
    }
```

## Using hystrix dashboard

```bash
docker run -d -p 9191:8080 arthurtsang/docker-hystrix-dashboard
```

- Start a service (default port is 8080)
- Open hystrix dashboard on your navigator with ```http://localhost:9191```
- Set the hystrix service endpoint in the first textbox with ```http://<host_ip>:8080/hystrix.stream```
- Click on __Add stream__ then __Monitor streams__

> Since hystrix dashboard runs in a container, you must use the host ip (your ip address) to reference the service.

## Using statsd agent

