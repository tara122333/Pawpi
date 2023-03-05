import React from 'react';
import HeroCarousalComponent from '../Components/HeroCarousal/HeroCarousalComponent';
import Navbar from '../Components/Navbar/Navbar';

const DefaultLayout = (props) => {
  return (
    <>
        <Navbar/>
        <HeroCarousalComponent/>
        {props.children}
    </>
  );
};

export default DefaultLayout;