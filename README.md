# Keycloak Example

Keycloak usage example

# Prerequisites

1. Run Keycloak docker container
```sh
make run-keycloak
# OR
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:12.0.4
```

2. Login to Keycloak [admin console](http://localhost:8080/auth/admin)
```sh
Login: admin
Password: admin
```

3. Create a new Keycloak realm
4. Create a new user
5. Register your FrontEnd app as a new client

For detailed information refer to: https://www.keycloak.org/getting-started/getting-started-docker
