import React from 'react';

import './ClaimSection.scss';

import Container from '../../container/Container';

const ClaimSection = () => (
  <Container>
    <div className="section-claim">
      <div className="section-claim__title">
        <span className="section-claim__title-main">
          Simplified Claims
        </span>
        <span className="section-claim__title-sub">
          Easy as One, Two, Three
        </span>
      </div>
      <div className="section-claim__content">
        <div className="section-claim__content-item">
          <div className="section-claim__content-item__avatar __blue-circle">1</div>
          <div className="section-claim__content-item__title">
            Report Claim
          </div>
          <div className="section-claim__content-item__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin quis nunc vitae velit rutrum suscipit non et eros.
          </div>
        </div>
        <div className="section-claim__content__separator">
          <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/after-blue.png?alt=media&token=d1e2b068-2734-4f3d-bb8c-aaf39a68fc3e" alt="after-blue" />
        </div>
        <div className="section-claim__content-item">
          <div className="section-claim__content-item__avatar __pink-circle">2</div>
          <div className="section-claim__content-item__title">
            Claim Processing
          </div>
          <div className="section-claim__content-item__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin quis nunc vitae velit rutrum suscipit non et eros.
          </div>
        </div>
        <div className="section-claim__content__separator">
          <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/after-pink.png?alt=media&token=174cc38a-5378-4f3d-b9f9-36aa7ca7fc71" alt="after-pink" />
        </div>
        <div className="section-claim__content-item">
          <div className="section-claim__content-item__avatar __green-circle">3</div>
          <div className="section-claim__content-item__title">
            Final Settlement
          </div>
          <div className="section-claim__content-item__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin quis nunc vitae velit rutrum suscipit non et eros.
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default ClaimSection;
