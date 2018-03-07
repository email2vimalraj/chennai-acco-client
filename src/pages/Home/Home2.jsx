import React, { Component } from 'react';

import Banner2 from '../../components/Banner/Banner2';
import Main2 from '../../components/Main/Main2';

class Home2 extends Component {
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

  componentWillUnmount() {
    document.removeEventListener('scroll');
  }

  render() {
    return (
      <div>
        <Banner2 />
        <Main2 />
      </div>
    );
  }
}

export default Home2;
