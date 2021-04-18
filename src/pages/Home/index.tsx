import React from 'react';
import { PrincipalBanner } from './components/PrincipalBanner';
import { About } from './components/About';

const Home = () => {
  return (
    <div className="App">
      <PrincipalBanner />
      <About />
    </div>
  );
};

export default Home;
