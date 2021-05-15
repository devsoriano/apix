import React from 'react';
import Home from './pages/Home';
import { Course } from './pages/Course';
import { Temary } from './pages/Course/components/Temary';
import { Services } from './pages/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/course/:id" component={Course} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/temary" component={Temary} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
