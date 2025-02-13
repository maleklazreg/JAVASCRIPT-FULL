import { useState } from 'react';

const Birthday = ({ firstName, lastName, initialAge, hairColor }) => {
  const [age, setAge] = useState(initialAge);

    const handleBirthday = () => {
        setAge(age + 1);
    };

  return (
    <div>
      <h1>{firstName} {lastName}</h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleBirthday}>Birthday Button</button>
    </div>
  );
};

export default Birthday;