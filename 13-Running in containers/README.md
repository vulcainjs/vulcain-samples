# Running in containers

```bash
docker build -t simpleservice:1.0 .
docker run -d -p 8080:8080 --name simpleservice1-0 simpleservice:1.0
```

