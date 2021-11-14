import React from 'react';

import './QuoteSection.scss';

import Container from '../../container/Container';

const QuoteSection = () => (
  <Container>
    <div className="section-quote">
      <div className="section-quote__text">
        <img src="https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/quote.png?alt=media&token=15db7da0-0ffa-49eb-8d6b-5dd0068ed39a" alt="quote" />
        <span className="section-quote__text-content">
          I need to understand what’s going on – it’s my health and I want to feel secure in it.
          With my previous health insurance, I didn’t know how any of it worked.
        </span>
        <span className="section-quote__text-author">
          Matthew Young
        </span>
        <span className="section-quote__text-author-location">
          Legal Consultant, United States
        </span>
      </div>
    </div>
  </Container>
);

export default QuoteSection;
