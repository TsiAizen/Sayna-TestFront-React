import React from 'react';

import './GuaranteeSection.scss';

import Container from '../../container/Container';
import BaseButton from '../../buttons/base/BaseButton';

const GuaranteeSection = () => (
  <Container>
    <div className="section-guarantee">
      <div className="section-guarantee__block">
        <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/shield-2.png?alt=media&token=a34f4e71-f3dc-405f-a184-f27b78e7017c" alt="shield" />
        <div className="section-guarantee__block-text">
          <span className="section-guarantee__block-text__title">
            100% Satisfaction Guarantee
          </span>
          <span className="section-guarantee__block-text__description">
            We offer no questions asked refund policy for 14 days from the policy date.
          </span>
        </div>
        <div className="section-guarantee__block-text__button">
          <BaseButton color="green">
            Get your free Quote
          </BaseButton>
        </div>
      </div>
    </div>
  </Container>
);

export default GuaranteeSection;
