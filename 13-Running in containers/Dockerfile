# ---------------------------------------------------
# Final image
# ---------------------------------------------------
FROM node:8-alpine

EXPOSE 8080

# Replace with the service name
ENV VULCAIN_SERVICE_NAME=SimpleService
ENV VULCAIN_SERVICE_VERSION=1.0

HEALTHCHECK --interval=30s --timeout=1s CMD curl -f http://localhost:8080/health || exit 1

WORKDIR /app
COPY package.json /app
RUN npm install

COPY index.js /app/bin/

ENTRYPOINT ["node"]
CMD ["bin/index.js"]