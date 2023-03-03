import React from 'react';
import HeroCarousalComponent from '../Components/HeroCarousal/HeroCarousalComponent';
import Navbar from '../Components/Navbar/Navbar';

const DefaultLayout = () => {
  return (
    <>
        <Navbar/>
        <HeroCarousalComponent/>
    </>
  );
};

export default DefaultLayout;