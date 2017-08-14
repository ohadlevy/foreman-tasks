import React from 'react';

const progresBar = ({ percent = '0' }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: percent + '%' }}
      >
        <span className="sr-only">
          {percent}% complete
        </span>
      </div>
    </div>
  );
};

export default progresBar;
