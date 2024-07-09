// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import Header from '../components/home/header';
 import Hero from '../components/home/hero';
import Body from '../components/home/body';
import TopFilter from '../components/home/topFilter';
import Footer from '../components/home/footer';

const Home = () => {
  return (
    <div className='home-pg '>
      <Header />
      <Hero />
      <TopFilter />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
