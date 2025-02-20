// Importing required libraries
import express from 'express'; // Importing Express for server creation
import { faker } from '@faker-js/faker'; // Importing Faker for generating random data

// Creating an instance of Express
const app = express();

// Function to create a random User object
const createUser = () => {
    return {
        _id: faker.datatype.uuid(), // Generating a unique ID
        firstName: faker.name.firstName(), // Generating a random first name
        lastName: faker.name.lastName(), // Generating a random last name
        email: faker.internet.email(), // Generating a random email
        password: faker.internet.password(), // Generating a random password
        phoneNumber: faker.phone.phoneNumber() // Generating a random phone number
    };
};

// Function to create a random Company object
const createCompany = () => {
    return {
        _id: faker.datatype.uuid(), // Generating a unique ID
        name: faker.company.companyName(), // Generating a random company name
        address: {
            street: faker.location.streetAddress(), // Generating a random street address
            city: faker.location.city(), // Generating a random city
            state: faker.location.state(), // Generating a random state
            zipCode: faker.location.zipCode(), // Generating a random zip code
            country: faker.location.country() // Generating a random country
        }
    };
};

// API route to get a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser(); // Creating a new user
    res.json(newUser); // Sending the new user as a JSON response
});

// API route to get a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany(); // Creating a new company
    res.json(newCompany); // Sending the new company as a JSON response
});

// API route to get both a new user and a new company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser(); // Creating a new user
    const newCompany = createCompany(); // Creating a new company
    res.json({ user: newUser, company: newCompany }); // Sending both as a JSON response
});

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Logging the server status
});