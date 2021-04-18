import React from 'react';
import Home from './pages/Home';
import { Courses } from './pages/Courses';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
