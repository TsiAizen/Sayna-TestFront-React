import React from 'react';

import './CardPrice.scss';

import BaseButton from '../../buttons/base/BaseButton';

const CardPrice = (props) => {
  const {
    color,
    title,
    price,
    contents,
    off,
    sticker,
  } = props;

  const renderContent = () => contents.map((c) => (
    <div className="content-price-card" key={c}>
      <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/tick.png?alt=media&token=436b9769-102d-408d-80b9-90dfd1b8e29c" alt="tick" />
      {c}
    </div>
  ));

  const renderOff = () => {
    if (!off) {
      return null;
    }

    return (
      <span className={`content-price-badge  __${color || ''}`}>
        {`save ${off} %`}
      </span>
    );
  };

  const renderSticker = () => {
    if (!sticker) {
      return null;
    }

    return <div className={`content-price-sticker  __${color || ''}`} />;
  };

  return (
    <div className={`comp-card-price __${color || ''}`}>
      {renderSticker()}
      <span className={`comp-card-price__title __${color || ''}`}>
        {title}
      </span>
      {renderOff()}
      <div className={`comp-card-price__price __${color || ''}`}>
        <span className="comp-card-price__price-unit">$</span>
        <span className="comp-card-price__price-value">{price}</span>
      </div>
      <div className="comp-card-price__content">
        {renderContent()}
      </div>
      <div className="comp-card-price__button">
        <BaseButton style={{ fontSize: '17px', padding: '1rem 3rem 1rem 3rem' }} color={color}>
          Choose plan
        </BaseButton>
      </div>
    </div>
  );
};

export default CardPrice;
