import React from 'react';

import './ChoiceSection.scss';

import Container from '../../container/Container';
import CardOptions from '../../options/card/CardOptions';

const choiceList = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/home-insurance-1.png?alt=media&token=d28c90bc-1c43-4429-9595-a95ae040c2af',
    title: 'Home Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#aff3ff',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/car-insurance-1.png?alt=media&token=b2aecd03-509a-401f-9951-6c95cc7f2b3b',
    title: 'Car Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#fbd1ff',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/life-insurance-1.png?alt=media&token=dedfa3e8-cd2e-494c-b56b-2bf85c7eb35f',
    title: 'Life Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#daffd3',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/business-insurance-1.png?alt=media&token=42410cbd-fa3b-4fcd-9f43-4d3ff9d34c9d',
    title: 'Business Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#fff5b3',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/travel-insurance-1.png?alt=media&token=9485dd57-d4e8-43ab-b385-1631e0f2e648',
    title: 'Travel Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#ffdad2',
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/sayna-test-99ab6.appspot.com/o/other-insurance-1.png?alt=media&token=c685eb6a-3fa2-4198-bc54-76276b81cb45',
    title: 'Other Insurance',
    content: 'Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.',
    color: '#d2d3ff',
  },
];

const ChoiceSection = () => {
  const renderListCard = () => choiceList.map((c) => (
    <CardOptions title={c.title} image={c.image} color={c.color} key={c.title}>
      {c.content}
    </CardOptions>
  ));

  return (
    <Container>
      <div className="section-choice">
        <div className="section-choice__title">
          <span className="section-choice__main">
            Choose your Insurance
          </span>
          <span className="section-choice__sub">
            Keep Your Life Smile, Safe, and Wealthy
          </span>
        </div>
        <div className="section-choice__content">
          {renderListCard()}
        </div>
      </div>
    </Container>
  );
};

export default ChoiceSection;
