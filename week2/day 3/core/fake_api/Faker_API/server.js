// server/server.js
import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8000;

// Function to create a random User object
const createUser = () => {
  return {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.uuid(), // Generates a unique ID
  };
};

// Function to create a random Company object
const createCompany = () => {
  return {
    _id: faker.string.uuid(), // Generates a unique ID
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
};

// Route to return a new user
app.get('/api/users/new', (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

// Route to return a new company
app.get('/api/companies/new', (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

// Route to return both a new user and a new company
app.get('/api/user/company', (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({
    user: newUser,
    company: newCompany,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});