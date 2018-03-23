import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/font-awesome.min.css';
import './assets/css/font-awesome-animation.min.css';
import './App.css';
import './assets/css/responsive.css';
import './assets/css/color-skin/default.css';

import Home2 from './pages/Home/Home2';
import PropertyList from './pages/Property/PropertyList';
import PropertyItem from './pages/Property/PropertyItem';
import AddProperty from './pages/Property/AddProperty';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';

const App = () => (
  <Router>
    <div>
      <Header2 />
      <Route exact path="/" component={Home2} />
      <Route exact path="/propertylist" component={PropertyList} />
      <Route path="/property/:id" component={PropertyItem} />
      <Route path="/addproperty" component={AddProperty} />
      <Footer />
    </div>
  </Router>
);

export default App;
