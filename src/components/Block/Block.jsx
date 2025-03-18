import React from 'react';
import './Block.css';
import { Studs } from '..';

const Block = ({
  color,
  studGap,
  studPosition,
  studCount,
  studWidth=20,
  studHeight,
  studColor,
  children,
  width,
  height,
  className,
}) => {
  const style = {
    '--block-color': color,
    '--block-width': `${width}px`,
    '--block-height': `${height}px`,
  };

  console.log({ studWidth, studHeight, studPosition });

  return (
    <div className={`block ${className || ''}`} style={style}>
      <Studs
        width={studWidth}
        height={studHeight}
        color={studColor || color}
        gap={studGap}
        count={studCount}
        position={studPosition}
      />
      {children}
    </div>
  );
};

export default Block;
