import React from 'react';
import { PrincipalBanner } from './components/PrincipalBanner';
import { About } from './components/About';
import { CoursesSection } from './components/CoursesSection';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Companies } from './components/Companies';
import { Statistics } from './components/Statistics';
import { ListServices } from '../Services/components/ListServices';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <main className="App">
      <PrincipalBanner />
      <About />
      <Companies />
      <ListServices />
      <Statistics />
      <CoursesSection />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
