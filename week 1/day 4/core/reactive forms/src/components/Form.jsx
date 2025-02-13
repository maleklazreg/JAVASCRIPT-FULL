import { useState } from 'react';

const Form = ({ addUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    const newErrors = {
      firstName: firstName.length < 2 ? 'First Name must be at least 2 characters' : '',
      lastName: lastName.length < 2 ? 'Last Name must be at least 2 characters' : '',
      email: email.length < 8 ? 'Email must be at least 8 characters' : '',
      password: password.length < 8 ? 'Password must be at least 8 characters' : '',
      confirmPassword: password !== confirmPassword ? 'Passwords must match' : '',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addUser({ firstName, lastName, email, password });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default Form;