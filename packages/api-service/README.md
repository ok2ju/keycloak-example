# Api service

[Keycloak NodeJS Adapter](https://www.keycloak.org/docs/latest/securing_apps/index.html#_nodejs_adapter)

Register your BackEnd app as a new client:
  - Configure -> Clients -> Create
  - Fill in required fields:
    Client ID: be-app;
    Client Protocol: openid-connect;
    Access Type: bearer-only;
    Admin URL: http://localhost:3001/;
    Backchannel Logout URL: http://localhost:3001/;
  - Copy settings:
    Go to Installation tab
    Select Format option: Keycloak OIDC JSON
    Copy and paste settings to the backend service app


Get Realm public key:
  - Configure -> Realm Settings -> Keys -> Public key
