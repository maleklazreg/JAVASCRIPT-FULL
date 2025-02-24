import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxList from './components/BoxList';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, height, width) => {
    setBoxes((prevBoxes) => [
      ...prevBoxes,
      {
        id: Date.now(), // Unique ID using timestamp
        color,
        height,
        width,
      },
    ]);
  };

  const deleteBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  return (
    <div className="container">
      <h1>Box Generator</h1>
      <BoxForm onAddBox={addBox} />
      <BoxList boxes={boxes} onDeleteBox={deleteBox} />
    </div>
  );
};

export default App;