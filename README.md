# NoSQLInterface

NoSQL interface in Angular

---

Here is the docker-compose to launch it:

    version: "3.3"

    services:
      mongo:
        image: kamlando/mongo-db-import:latest
        networks:
          - general

      node:
        image: kamlando/node-api-example:latest
        networks:
          - general
        links:
          - mongo

      angular:
        image: kamlando/node-ang-interface
        networks:
          - general
        links:
          - node

      networks:
        general:
        driver: bridge
        ipam:
          config:
            - subnet: 101.198.0.0/24

---
## Then type in your console:  
    docker-compose up -d 
---
## Finally check the url:
[101.198.0.4:4200](101.198.0.4:4200)
