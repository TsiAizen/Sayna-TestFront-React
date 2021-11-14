import React from 'react';

import './GuaranteeSeconSection.scss';

import Container from '../../container/Container';
import BaseButton from '../../buttons/base/BaseButton';

const GuaranteeSeconSection = () => (
  <Container>
    <div className="section-guarantee-second">
      <div className="section-guarantee-second__block">
        <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/shield-1.png?alt=media&token=b39858d9-feb6-46c3-a176-b819efac5b9b" alt="shield" />
        <div className="section-guarantee-second__block-text">
          <span className="section-guarantee-second__block-text__title">
            Insurance made easy
          </span>
          <span className="section-guarantee-second__block-text__description">
            At fincorp, we are commited to provide top-notch services to our customers.
          </span>
        </div>
        <div className="section-guarantee-second__block-text__button">
          <BaseButton color="green">
            Get your free Quote
          </BaseButton>
        </div>
      </div>
    </div>
  </Container>
);

export default GuaranteeSeconSection;
