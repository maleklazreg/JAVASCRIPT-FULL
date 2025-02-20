import React from 'react';
import {Link , useNavigate} from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/number/5">this what we put now</Link>
      <h1 onClick={ () =>{ navigate('/number/4');}
       }>Welcome to our website</h1>
      <p>This is the home page</p>
    </div>
  )

};

export default Home;