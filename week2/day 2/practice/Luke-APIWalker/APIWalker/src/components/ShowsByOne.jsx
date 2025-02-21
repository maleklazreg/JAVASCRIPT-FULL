import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowsByOne = () => {
  const { category, id } = useParams();
  const [obj, setObj] = useState({});
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    axios.get(`https://swapi.dev/api/${category}/${id}/`)
      .then(res => {
        setObj(res.data);
        if (category === "people") {
          return axios.get(res.data.homeworld);
        }
      })
      .then(res => {
        if (res) {
          setData(res.data);
        }
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  }, [category, id]);

  if (error) {
    return (
      <div className="container">
        <h1>These aren't the droids you're looking for</h1>
        <img src="https://starwarsblog.starwars.com/wp-content/uploads/2015/01/obi-wan-kenobi_0e3e493d.jpeg" alt="Obi-Wan Kenobi" />
      </div>
    );
  }

  return (
    <div className="container">
      {obj.name ? (
        <>
          <h2>{obj.name}</h2>
          {category === "planets" ? (
            <>
              <p>Climate: {obj.climate}</p>
              <p>Terrain: {obj.terrain}</p>
              <p>Surface Water: {obj.surface_water}</p>
              <p>Population: {obj.population}</p>
            </>
          ) : category === "people" ? (
            <>
              <p>Height: {obj.height}</p>
              <p>Hair Color: {obj.hair_color}</p>
              <p>Eye Color: {obj.eye_color}</p>
              <p>Skin Color: {obj.skin_color}</p>
              <p>Home World: {data ? data.name : "Loading..."}</p>
            </>
          ) : (
            <>
              <p>Name: {obj.name}</p>
              <p>Model: {obj.model}</p>
              <p>Manufacturer: {obj.manufacturer}</p>
              <p>Passengers: {obj.passengers}</p>
            </>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ShowsByOne;