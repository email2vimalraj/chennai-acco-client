import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/font-awesome.min.css';
import './assets/css/font-awesome-animation.min.css';
import './App.css';
import './assets/css/responsive.css';
import './assets/css/color-skin/default.css';

import Home from './pages/Home/Home';
import Home2 from './pages/Home/Home2';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home2" component={Home2} />
    </div>
  </Router>
);

export default App;
