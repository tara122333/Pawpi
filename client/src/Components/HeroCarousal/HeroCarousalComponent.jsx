import React from 'react';
import HeroSlider from 'react-slick';
// component 
import { NextArrow,PrevArrow } from './Arrows.Component';

 const HeroCarousalComponent = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    };


  const settingsSm = {
    arrows:true , 
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots :true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
       
  };

  const images= ["https://images.pexels.com/photos/230785/pexels-photo-230785.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

  return (
    <> 
    <div className="lg:hidden">
    <HeroSlider{...settingsSm}>{images.map((images)=>(
      <div className="w-full h-56 md:h-64 py-3">
        <img src={images} alt="carousel images" className="w-full h-full rounded-md" />
      </div>

    ))}</HeroSlider>
    </div>

    
<div className="hidden lg:block">
<HeroSlider{...settingsLg}>{images.map((images)=>(
      <div className="w-full h-96 px-2 py-3">
        <img src={images} alt="carousel images" className="w-full h-full rounded-md" />
      </div>

    ))}</HeroSlider>
</div>
    </>
)};
export  default HeroCarousalComponent ;