import React from 'react';

const Box = ({ color, height, width, id, onDelete }) => {
  const boxStyle = {
    '--box-color': color,
    '--box-height': `${height}px`,
    '--box-width': `${width}px`,
  };

  return (
    <div className="box" style={boxStyle}>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
};

export default Box;