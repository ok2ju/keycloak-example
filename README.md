# Keycloak Example

Keycloak usage example

# Prerequisites

1. Run Keycloak docker container
```sh
make run-keycloak
# OR
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:14.0.0
```

2. Login to Keycloak [admin console](http://localhost:8080/auth/admin)
```sh
Login: admin
Password: admin
```

3. Create a new Keycloak realm
4. Create a new user
  - Manage -> Users -> Add user;
  - Fill in required fields;
  - Set password: Credentials tab -> Temporary: off
  - Check created user: http://localhost:8080/auth/realms/REALM_NAME_HERE/account

5. Create a new FrontEnd Client
6. Create a new BackEnd Client

For detailed information refer to: https://www.keycloak.org/getting-started/getting-started-docker
