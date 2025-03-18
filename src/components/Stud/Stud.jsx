import React from 'react';
import './Stud.css';

const Stud = ({ width = 20, height = 10, color = '#000' }) => {
  const style = {
    '--stud-width': `${width}px`,
    '--stud-height': `${height}px`,
    '--stud-color': color,
  };

  return <div className="stud" style={style}></div>;
};

export default Stud;
