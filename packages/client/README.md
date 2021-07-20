# Keycloak demo app

## TODO

- Add example with user roles

## Keycloak Settings

[Keycloak JS Adapter](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter)

Register your FrontEnd app as a new client:
  - Configure -> Clients -> Create
  - Fill in required fields:
    Client ID: fe-app;
    Client Protocol: openid-connect;
    Root URL: http://localhost:3000/;
    Valid Redirect URIs: http://localhost:3000/*;
    Web Origins: http://localhost:3000/;
    Admin URL: http://localhost:3000/;
  - Copy settings:
    Go to Installation tab
    Select Format option: Keycloak OIDC JSON
    Copy and paste settings to the client app
