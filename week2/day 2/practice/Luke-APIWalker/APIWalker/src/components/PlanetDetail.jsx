import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

const PlanetDetail = ({ id }) => {
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch planet data from SWAPI when ID changes
    const fetchPlanet = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        if (!response.ok) {
          throw new Error('Planet not found');
        }
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanet();
  }, [id]); 

  if (loading) return <div>Loading planet data from SWAPI...</div>;
  if (error) return <ErrorMessage />;
  if (!planet) return null;

  return (
    <div className="resource-detail">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate || 'N/A'}</p>
      <p>Terrain: {planet.terrain || 'N/A'}</p>
      <p>Population: {planet.population || 'N/A'}</p>
      <p>Gravity: {planet.gravity || 'N/A'}</p>
    </div>
  );
};

export default PlanetDetail;