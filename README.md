# Alfrescofav

This project retrieves the the user's favourite files and folders from "https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json" and displays them as "cards", using the "mat-card" material.

The "Favourites" title is placed in the top-center of the page, using a h1 element.
Each card contains an icon which allows the user to tell whether the item is a file or a folder, followed by the name of the file/folder.

The project structure consists in the "AppComponent" component which uses the "ApiService" service to retrieve data from the api, and then processes it to display in the browser.

Some unit tests have been made to verify the app with karma and protractor.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
