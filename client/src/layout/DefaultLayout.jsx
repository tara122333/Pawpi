import React from 'react';
import HeroCarousalComponent from '../Components/Components/HeroCarousal/HeroCarousalComponent';
import Navbar from '../Components/Components/Navbar/Navbar';

const DefaultLayout = () => {
  return (
    <>
        <Navbar/>
        <HeroCarousalComponent/>
    </>
  );
};

export default DefaultLayout;