SHELL = /bin/bash
WORKDIR := $(PWD)

LOGIN = admin
PASSWORD = admin

default: run-keycloak
.PHONY: default

run-keycloak:
	@ echo "---> Running keycloak ..."
	@ docker run -p 8080:8080 -e KEYCLOAK_USER=$(LOGIN) -e KEYCLOAK_PASSWORD=$(PASSWORD) quay.io/keycloak/keycloak:14.0.0
.PHONY: run-keycloak
