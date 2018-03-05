import React, { Component } from 'react';

import Header2 from '../../components/Header/Header2';
import Banner2 from '../../components/Banner/Banner2';
import Main2 from '../../components/Main/Main2';
import Footer from '../../components/Footer/Footer';

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

  render() {
    return (
      <div>
        <Header2 />
        <Banner2 />
        <Main2 />
        <Footer />
      </div>
    );
  }
}

export default Home2;
