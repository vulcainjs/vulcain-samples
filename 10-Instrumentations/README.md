# Monitoring

## Using zipkin

Vulcain generates zipkin trace with correlation id between multiple requests.

Run local zipkin server

```bash
docker run -d -p 9411:9411 openzipkin/zipkin
```

Start service with one environment variable named ```zipkin```

Example in launch.json

```js
  "env": {
    "VULCAIN_SERVICE_NAME": "SAMPLE",
    "VULCAIN_SERVICE_VERSION": "1.0",
    "zipkin": "localhost"
    }
```

Go to zipkin dashboard on ```localhost:9411```

## Using jaeger

Run jaeger server with

```bash
docker run -d -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \
  -p5778:5778 -p16686:16686 -p14268:14268 docker pull jaegertracing/all-in-one:latest
```

> You can also used jaeger as a zipkin server see [here](http://jaeger.readthedocs.io/en/latest/getting_started/)

Start service with one environment variable named ```jaeger```

Example in launch.json

```js
  "env": {
    "VULCAIN_SERVICE_NAME": "SAMPLE",
    "VULCAIN_SERVICE_VERSION": "1.0",
    "jaeger": "localhost"
    }
```

Go to jaeger dashboard on ```localhost:16686```

## Using prometheus

Update the ```targets``` property in prometheus.yml with your host ip and run prometheus with

```bash
docker run -p 9090:9090 -d -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
````

run prometheus dashboard ```http://localhost:9090```  
try ```avg(rate(vulcain_service_duration_ms_sum[1m]) / rate(vulcain_service_duration_ms_count[1m])) by (serviceFullName)```

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
