import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Random from './pages/Random';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/learn">
          <Learn/>
        </Route>
        <Route path="/random">
          <Random/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
