import React, { useState } from 'react';

const BoxForm = ({ onAddBox }) => {
  const [color, setColor] = useState('#000000'); // Default to black
  const [size, setSize] = useState(100); // Default size in pixels

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && size > 0) {
      onAddBox(color, size, size); // Use the same value for height and width
      setColor('#000000'); // Clear color input
      setSize(100); // Reset size to default

    // if we dont dont want to clear or refrech the color and 
        // the size remove the last two second line setColor and setSize

    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Size (px):
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value) || 0)}
            min="1"
          />
        </label>
        <button type="submit">Add Box</button>
      </form>
    </div>
  );
};

export default BoxForm;