# spring-security-spa-example

This is proof-of-concept setup for a single-page-application with a secured gateway.

It consists of:
* a minimal vuejs-powered single-page-application
* a cloud gateway with secured routes and persisted sessions
* a minimal microservice that retrieves user information when requests are forwarded from the microservice

## Prerequisites

* node 14+
* java 11
* docker
* docker-compose

## vue-frontend

The frontend single-page application is setup with
* vuejs
* typescript
* bootstrap-vue (for layout)

### About the frontend

The frontend has a secure/logged-in route and other logged-out routes. When accessing a logged-in route the [navigation guard](vue-frontend/src/modules/resolvers.ts) kicks in and navigates the user to to the login page.

The secure route performs a request to the cloud-gateway, which forwards it to the microservice. The answer of the microservice is shown on the page.

### Getting started

Install the dependencies
```bash
cd vue-frontend
npm install
```

Run the frontend
```
npm run serve
```

Access the frontend in the browser under http://localhost:8080

*Note: the gateway and the microservice need to be started as well for full functionality*

## spring-gateway-security-spa

A spring-boot based service that uses spring-cloud-gateway for routing requests and spring-security for securing routes.

Libraries used are:
* spring-boot
* spring-cloud-gateway
* spring-security
* spring-session-data-mongodb
* spring-boot-starter-data-mongodb-reactive

### Security

All routes beginning with `/api/` are considered secure.

Credentials are hard-coded as `user` / `password`.

Securty configuration is done in [CustomSecurityConfig](spring-gateway-security-spa/src/main/java/com/github/xabgesagtx/springgatewaysecurityspa/CustomSecurityConfig.java)

In the same file the session persistence in mongodb is activated via the annotation `@EnableMongoWebSession`. This means that sessions survive a restart of the application and that multiple instances of the same application can share the same session, which means that logged-in users can be routed to any instance of the application without any special considerations. They will be considered logged-in on all instances.

### Routing

Only a single route is configured `/api/hello`, which leads to the other sub-projects microservice. Routing is configured in the [application.yml](spring-gateway-security-spa/src/main/resources/application.yml)

The gateway has a global filter configured that takes the user information on logged-in routes an forwards the username in the header `X-Authenticated-User` (see [ForwardUserHeaderFilter](spring-gateway-security-spa/src/main/java/com/github/xabgesagtx/springgatewaysecurityspa/ForwardUserHeaderFilter.java))

### Getting started

Bootup of the session store (mongodb) 

```bash
cd spring-gateway-security-spa
docker-compose up -d
```

Running the gateway application

```bash
./mvnw spring-boot:run
```

The application listens on port 8180.

## simple-microservice

A minimal microservice with a single route `/hello`.

The [HelloWorldController](simple-microservice/src/main/java/com/github/xabgesagtx/simplemicroservice/HelloWorldController.java) takes the username from the header `X-Authenticated-User` and creates a greeting for the user.

The application shows how user information can be forwarded without the receiving application implementing any security. Of course, in more complex and/or critical applications implementing security as well is a good idea.

### Getting started

Run the application 

```bash
cd simple-microservice
./mvnw spring-boot:run
```

The application listens on port 8280.