# Monitoring

Vulcain generates many metrics. You just need to set some environment variables when you execute a service to enable metrics for a specific tool.

> You can use docker-compose to run all servers described in this file. **Update** prometheus/prometheus.yml with your host ip before running docker-compose.

```bash
docker-compose up -d
```

## Using jaeger

Run jaeger server with

```bash
docker run -d -p 5775:5775/udp -p 6831:6831/udp -p 6832:6832/udp -p 5778:5778 -p 16686:16686 -p 14268:14268 jaegertracing/all-in-one:latest
```

> You can also use jaeger as a zipkin server see [here](http://jaeger.readthedocs.io/en/latest/getting_started/)

Start service with an environment variable named ```jaeger```

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

Update the ```targets``` property in prometheus.yml with your host ip and run prometheus from this directory

> The following command must be used from a bash shell 

```bash
docker run -p 9090:9090 -d -v $(pwd)/prometheus:/etc/prometheus prom/prometheus
````

run prometheus dashboard ```http://localhost:9090```  
try ```avg(rate(vulcain_service_duration_ms_sum[1m]) / rate(vulcain_service_duration_ms_count[1m])) by (serviceFullName)```

## Using hystrix dashboard

```bash
docker run -d -p 9191:8080 arthurtsang/docker-hystrix-dashboard
```

- Start a service (default port is 8080)
- Open hystrix dashboard on your navigator with ```http://localhost:9191```
- Set the hystrix service endpoint in the first input box with ```http://<your_host_ip>:8080/hystrix.stream```
- Click on __Add stream__ then __Monitor streams__

> Since hystrix dashboard runs in a container, you must use the host ip (your ip address) to reference the service.

## Using statsd agent
[TODO]