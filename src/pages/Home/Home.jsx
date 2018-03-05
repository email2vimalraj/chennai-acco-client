import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
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
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
