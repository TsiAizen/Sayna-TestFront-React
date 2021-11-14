import React from 'react';

import './BaseButton.scss';

const BaseButton = (props) => {
  const {
    onClick, children, color, style,
  } = props;

  return (
    <button type="button" style={style} onClick={onClick} className={`comp-button-base __${color || ''}`}>
      {children}
    </button>
  );
};

export default BaseButton;
