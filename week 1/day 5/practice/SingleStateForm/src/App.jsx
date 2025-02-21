import React, { useState } from 'react';
import Form from './components/Form.jsx';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
});
  return (
    <div>
      <Form setFormData={setFormData} formData={formData}/>
      <div className="data-display">
      <ul>
        <li><strong>First Name:</strong> {formData.firstName}</li>
        <li><strong>Last Name:</strong> {formData.lastName}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Password:</strong> {formData.password}</li>
        <li><strong>Confirm Password:</strong> {formData.confirmPassword}</li>
      </ul>
    </div>
    </div>
  );
}

export default App;