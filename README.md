## Node.js JWT Authentication Project
This project is a simple implementation of JWT (JSON Web Token) authentication using Node.js and Express. The project is deployed on Render, a fully managed cloud platform.

## Project Structure
## User Model: 
Contains hardcoded user data.
## Auth Middleware: 
Checks for valid JWT before granting access to certain routes.
## Auth Controller: 
Handles login requests, validates user credentials, and issues JWT.
## User Controller: 
Handles user data retrieval with JWT authorization.
## Endpoints
-Login (public): POST /login. Request body must contain username and password.
-Get User Data (private): GET /users/:id and GET /users. Requires JWT in request header.

## Deployment
The application is deployed on Render, a fully managed cloud platform.
Here are the steps taken to deploy the application:

Created a new Web Service on Render.
Connected the Web Service to the GitHub repository.
Specified the build command (npm install) and start command (node server.js).
Successfully deployed the application.

## How to Run Locally
Clone the repository to your local machine.
Run npm install to install necessary dependencies.
Run node index.js to start the server.
Use a tool like Postman to test the endpoints.
## How to Access on Cloud
You can access the deployed application at your-render-service-url. 
Replace your-render-service-url with the actual URL provided by Render. Use a tool like Postman to test the endpoints.

Remember to replace your-render-service-url with the actual URL of your deployed application on Render.