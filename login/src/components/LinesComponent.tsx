// LinesComponent.jsx

import React from 'react';
import '../LinesComponent.scss';

const LinesComponent: React.FC = () => {
  return (
    <div className="lines-container">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default LinesComponent;
