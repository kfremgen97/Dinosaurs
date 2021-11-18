# Dinosaurs

This project aims to give a real-world scenario of working with object-oriented javascript.
The functionality of the application serves two purposes:
- Improve experience building objects with javascript
- Taking advantage of user interaction with the DOM

The application consist of an infographic that is derived from data that is provided via dino.json, as well as user input data.
The application pulls information from a form and uses it to complete an array of objects that will then be appended back to the DOM.


### Architecture pattern used:
- Model View Controller

### Design pattern used:
- Revealing module pattern

### Technologies used:
- Webpack
- SCSS

## Run the project

There are a number of steps required to get the project running after cloning or downloading the project.

Below are the steps to run the project:

1. Install required dependencies via ( npm install )

2. Build the project via (npm run webpack-dev)
    - This allows for webpack to bundle the project and start the development server

3. After the project is built navigate to (http://localhost:8080/)

## Test the project

Below are the steps to test the project:

1. Run the command(npm run jest-test)