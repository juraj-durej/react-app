
## React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `docker build -t react-app:1.0.0 .`

Dockerize app with tag and name react-app

### `docker run -it --rm --env REACT_APP_BACKEND_URL="http://localhost:8081/api" -p 3000:3000 react-app:1.0.0`

Runs dockerized app with tag and name react-app and set backend url ENV


