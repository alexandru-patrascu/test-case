import React from 'react';
import './Panel.css';
import { Studs } from '..';

const Panel = ({
  color,
  text,
  studColor,
  studGap,
  studCount,
  studWidth,
  studHeight,
}) => {
  const style = {
    '--panel-color': color,
  };

  return (
    <div className="panel" style={style}>
      <div className="studs-row">
        <Studs
          width={studWidth}
          height={studHeight}
          color={studColor || color}
          count={studCount}
          gap={studGap}
        />
      </div>
      <div className="panel-text">{text}</div>
    </div>
  );
};

export default Panel;
