import React from 'react';

import './DetailsOptions.scss';

const DetailsOptions = (props) => {
  const { title, children } = props;

  return (
    <div className="comp-details-options">
      <div className="comp-details-options__icon">
        <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/tick.png?alt=media&token=436b9769-102d-408d-80b9-90dfd1b8e29c" alt="tick" className="comp-details-options__icon-img" />
      </div>
      <div className="comp-details-options__text">
        <span className="comp-details-options__text-title">
          {title}
        </span>
        <span className="comp-details-options__text-sub">
          {children}
        </span>
      </div>
    </div>
  );
};

export default DetailsOptions;
