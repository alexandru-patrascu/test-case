import './Studs.css';
import { Stud } from '..';
import { STUD_DEFAULTS } from '../../constants';

const Studs = ({
  width = STUD_DEFAULTS.WIDTH,
  position = STUD_DEFAULTS.POSITION,
  count = STUD_DEFAULTS.COUNT,
  height = STUD_DEFAULTS.HEIGHT,
  gap = STUD_DEFAULTS.GAP,
  color = STUD_DEFAULTS.COLOR,
}) => {
  const style = {
    '--stud-gap': `${gap}px`,
    '--stud-width': `${width}px`,
    '--stud-height': `${height}px`,
  };

  console.log({ style });

  return (
    <div className={`studs studs-${position}`} style={style}>
      {Array.from({ length: count }).map((_, index) => (
        <Stud key={index} width={width} height={height} color={color} />
      ))}
    </div>
  );
};

export default Studs;
