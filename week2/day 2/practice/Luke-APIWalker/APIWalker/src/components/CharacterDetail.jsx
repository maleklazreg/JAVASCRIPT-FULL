import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';
import { useNavigate, useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    // Fetch character data from SWAPI when ID changes
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) {
          throw new Error('Character not found');
        }
        const data = await response.json();
        setCharacter(data);

        // Ninja Bonus: Fetch homeworld if it's a person
        if (data.homeworld) {
          const homeworldResponse = await fetch(data.homeworld);
          if (homeworldResponse.ok) {
            const homeworldData = await homeworldResponse.json();
            setHomeworld(homeworldData);
          } else {
            throw new Error('Homeworld not found');
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]); // Re-run when ID changes

  if (loading) return <div>Loading character data from SWAPI...</div>;
  if (error) return <ErrorMessage />;

  if (!character) return null;

  // extract homeworld ID from URL and create a link, its with AI
  const homeworldId = homeworld?.url?.match(/\/(\d+)\/$/)?.[1];
  const homeworldLink = homeworldId ? `/planets/${homeworldId}` : null;

  return (
    <div className="resource-detail">
      <h2>{character.name}</h2>
      <p>Height: {character.height || 'N/A'} cm</p>
      <p>Mass: {character.mass || 'N/A'} kg</p>
      <p>Hair Color: {character.hair_color || 'N/A'}</p>
      <p>Eye Color: {character.eye_color || 'N/A'}</p>
      {homeworld && (
        <p>
          Homeworld: {homeworld.name}{' '}
          {homeworldLink && (
            <a
              href={homeworldLink}
              onClick={(e) => {
                e.preventDefault();
                navigate(homeworldLink);
              }}
            >
              homeworld
            </a>
          )}
        </p>
      )}
    </div>
  );
};

export default CharacterDetail;