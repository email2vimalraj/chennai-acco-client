import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Featured from './components/Featured';

import './assets/css/font-awesome.min.css';
import './assets/css/font-awesome-animation.min.css';
import './App.css';
import './assets/css/responsive.css';
import './assets/css/color-skin/default.css';

class App extends Component {
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      const header = document.getElementsByTagName('header')[0];
      if (isTop) {
        header.classList.remove('scrolled');
      } else {
        header.classList.add('scrolled');
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Featured />
      </div>
    );
  }
}

export default App;
