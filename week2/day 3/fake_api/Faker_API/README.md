# README.md

# Faker API

This project is a simple API that generates random User and Company objects using the Faker library. It is built with Express and provides endpoints to retrieve these objects in JSON format.

## Project Structure

```
Faker_API
├── server
│   ├── server.js
├── package.json
├── README.md
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) comes with Node.js.

### Installation Steps

1. **Create Project Folder**:
   - Create a folder named `Faker_API`.

2. **Create Server Folder**:
   - Inside `Faker_API`, create a folder named `server`.

3. **Create server.js File**:
   - Inside the `server` folder, create a file named `server.js`.

4. **Navigate to Server Folder**:
   - Open your terminal and navigate to the `server` folder.

5. **Generate package.json**:
   - Run `npm init -y` to generate a `package.json` file.

6. **Install Dependencies**:
   - Run the following commands to install the required libraries:
     ```
     npm install express nodemon @faker-js/faker
     ```

7. **Configure package.json**:
   - Modify the `package.json` to add a script for nodemon:
     ```json
     "scripts": {
       "start": "nodemon server.js"
     }
     ```

### Code Overview

- **server.js**: This file sets up the Express server and defines the API routes to generate User and Company objects.
  - **createUser**: Function that generates a random User object.
  - **createCompany**: Function that generates a random Company object.
  - **API Routes**:
    - `/api/users/new`: Returns a new User object.
    - `/api/companies/new`: Returns a new Company object.
    - `/api/user/company`: Returns both a new User and a new Company object.

### Running the Server

1. In the terminal, run `npm start` to start the server.
2. The server will run on `http://localhost:3000`.

### Testing the API

You can test the API using a tool like Postman or your web browser by accessing the following endpoints:

- `http://localhost:3000/api/users/new` - Get a new user.
- `http://localhost:3000/api/companies/new` - Get a new company.
- `http://localhost:3000/api/user/company` - Get both a new user and a new company.

## License

This project is open-source and available under the MIT License.