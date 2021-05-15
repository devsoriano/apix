import React from 'react';
import { Banner } from './components/Banner';
import { Statistics } from './components/Statistics';
import { Objetives } from './components/Objetives';
import { WhatDoWeDo } from './components/WhatDoWeDo';
import { ListServices } from './components/ListServices';

export const Services = () => {
  window.scrollTo(0, 0);

  return (
    <div className="Services">
      <Banner />
      <Statistics />
      <Objetives />
      <WhatDoWeDo />
      <ListServices />
    </div>
  );
};
