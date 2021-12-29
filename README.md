# node-typescript-seed

Node.js with TypeScript REST API seed application. *This seed app is currently on Node14

## Notice

This application is based off of the Travelers Node Seed application. We modified that seed application and converted it into a TypeScript-based solution. Also, we modernized the unit testing suite by converting it to Jest.

## Prerequisites

- Node: 10.x (Current LTS)
- NPM: 6.x (Installed with current Node LTS)
- Configure NPM to use Nexus [instructions](https://github.prodlb.travp.net/travelers/node-seed/wiki/NPM-Nexus-Configuration)
- IDE support:
  - Visual Studio Code
    - Suggested Editor Plugins (install from VS code command window: Ctrl-Shift-P).
      - ESLint
        - Enable auto fix on save: Preferences > Settings > eslint.autoFixOnSave=true
      - REST Client
        - REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.
      - API Elements
        - Syntax assistance for API Blueprint documentation

## Usage

```sh
npm i
npm run build
npm start
```

## Development Scripts

```sh
npm run start:dev # runs auth proxy and local server with auto-reload
npm test # run linter and unit tests
```

## Swagger UI

```sh
To run swagger UI go to localhost:3000/api-docs
This version of swagger has the auto generating UI, users will have to change the @swagger comments in the api
```

## REST Client

```sh
npm run start:dev # runs auth proxy and local server with auto-reload
```

## Environment Variables

- PORT: Web service port
- NODE_ENV: Node Environment (development|production|test(for unit testing only))
- TRAVAUTH_ISSUER: Issuer for SSO Gateway (Provided by IAM)
- TRAVAUTH_AUDIENCE: Audience for SSO Gateway (Provided by IAM)
- TRAVAUTH_SECRETORKEY: Public PEM file contents for SSO Gateway (Provided by IAM)
- TRAVAUTH_ROLESJSON: Roles map for the TravAuth component

## Build and Deployment

- Because this is a TypeScript application, you will need to build and compile it as plain JavaScript before you deploy it to a server. Use the build command to do this.

```sh
npm run build
```

- Be sure to include "npm run build" in your Jenkinsfile. This will create a 'build' folder that contains your complied JavaScript code.

## Samples

This seed application contains some sample routes and services. These are here for demonstration purposes and should help guide you in your initial development and structuring of your project. It is recommended that you delete these samples from your project once you deem that you do not need them.
