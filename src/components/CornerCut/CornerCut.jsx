import './CornerCut.css';

const Stud = ({ width = 20, height = 10, color = '#000' }) => {
  const style = {
    '--corner-cut-width': `${width}px`,
    '--corner-cut-height': `${height}px`,
    '--corner-cut-color': `${color}px`,
  };

  return <div className="corner-cut" style={style}></div>;
};

export default Stud;
