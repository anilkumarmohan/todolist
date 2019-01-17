# TODO LIST
## Version 0.0.1

A project to add daily todo activities.Used local storage for storing data

## Technologies used
1. Angular (Version 7.0.1) and angular-cli
2. Node.js (Version 10.15.0)
3. Bootstrap and SASS

## Running App

1. Install node package manager.
2. Create new folder locally and clone git repo into it.
3. Go to application root directory and open command promt
4. Run command.
    ```sh
    $ npm install
    
5. For running application locally run command
    ```sh
    $ ng serve
    ```
   It will run the apllication in localhost server port 4200.
   
6. For building application in dev environment, run command 
   ```sh
   $ ng build
   ```
   Set configurations in `environment.ts` file for building app in dev environment.
7. For building app for production environment, run command 
    ```sh
    $ ng build --prod
    ```
    Set configurations in `environment.prod.ts` for production builds.It will create a new folder named `dist` in application root 
    directory which contains bundled files.
