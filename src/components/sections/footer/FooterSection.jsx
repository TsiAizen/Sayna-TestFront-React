import React from 'react';

import './FooterSection.scss';

import Container from '../../container/Container';

const FooterSection = () => (
  <Container>
    <div className="section-footer">
      <div className="section-footer__items">
        <div className="section-footer__item">
          <span className="section-footer__item-title">ADDRESS</span>
          <span className="section-footer__item-content">400-401 West Georgia Street</span>
          <span className="section-footer__item-content">Vancouver, BC, Canada, V6B 5A1</span>
          <span className="section-footer__item-content">+1 (123) 456 7890</span>
          <span className="section-footer__item-content">sales@insurance.com</span>
        </div>
        <div className="section-footer__item">
          <span className="section-footer__item-title">FOLLOW US</span>
          <span className="section-footer__item-content">Twitter</span>
          <span className="section-footer__item-content">Facebook</span>
          <span className="section-footer__item-content">LinkedIn</span>
          <span className="section-footer__item-content">Instagram</span>
        </div>
        <div className="section-footer__item">
          <span className="section-footer__item-title">ABOUT US</span>
          <span className="section-footer__item-content">
            Compellingly myocardinate market-driven infrastructures
            before team driven manufactured products.
            Monotonectally exploit tactical markets vis-a-vis excellent deliverables.
          </span>
        </div>
      </div>
      <div className="section-footer__copyright">
        Copyright © 2019. Insurance LLC
      </div>
    </div>
  </Container>
);

export default FooterSection;
