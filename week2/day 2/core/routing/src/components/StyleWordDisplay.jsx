import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordDisplay = () => {
  // Extract word, textColor, and bgColor from the URL parameters
  const { word, textColor, bgColor } = useParams();
  
  const style = {
    color: textColor,
    backgroundColor: bgColor,
    padding: '10px',
    borderRadius: '5px',
    fontSize: '50px',
  };

  return <div style={style}>{word}</div>;
};

export default StyledWordDisplay;