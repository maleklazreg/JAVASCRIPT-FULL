import React from 'react';
import Box from './Box';

const BoxList = ({ boxes, onDeleteBox }) => {
  return (
    <div className="boxes">
      {boxes.map((box) => (
        <Box
          key={box.id}
          color={box.color}
          height={box.height}
          width={box.width}
          id={box.id}
          onDelete={onDeleteBox}
        />
      ))}
    </div>
  );
};

export default BoxList;