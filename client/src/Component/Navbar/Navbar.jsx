import React, { useState } from 'react';
import {GrLocation} from "react-icons/gr";
import {TbChevronDown} from "react-icons/tb";
import {TbChevronUp} from "react-icons/tb";
import {RxDividerVertical} from "react-icons/rx";
import {CiSearch} from "react-icons/ci";
import {RiShoppingCartLine} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";

//for small devices/mobile
const NavSm=()=>{
  return(
    <>
      <h1>hi there</h1>
    </>
  );
};

//for medium devices/tablets
const NavMd=()=>{
  return(
    <>
      <h1>hi there from medium</h1>
    </>
  );
};

//for large devices
const NavLg=()=>{

  var temp = true;
  const [isTemp, setIsTemp] = useState(false);
  function cha(){
    console.log("clicked");
    temp = false;
    return temp;
  }
  return(
    <>
      <div className="w-full h-20 flex justify-center items-center">
        <div className="flex items-center justify-between px-12 py-2 h-16 w-full gap-5">
          <div className="w-1/6 h-full flex justify-center items-center">
            <div className='w-20 h-20'>
              <img src="https://i.ibb.co/4SPWQ6t/Whats-App-Image-2023-02-10-at-22-50-36.jpg"
              alt="logo"
              className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex items-center w-3/5 gap-2 bg-white px-3 h-12 rounded-xl border border-gray-300 shadow-md">
              <div className='flex justify-end items-center py-2 gap-1 w-2/5'>
                <div className='flex justify-center items-center gap-2 w-full'>
                  <GrLocation className="text-2xl text-center"/>
                  
                  <input type="search"
                  className="w-44 h-full text-sm outline-none font-semibold"
                  placeholder="Location"
                  />
                </div>
                <div className="text-2xl flex items-center cursor-pointer">
                  
                  {
                    isTemp ? <TbChevronDown onClick={() => setIsTemp((prev) => !prev)} /> : <TbChevronUp  onClick={() => setIsTemp((prev) => !prev)}/>
                  }
                </div>

              </div>
              <div className='flex justify-center items-center w-3/4'>
                <RxDividerVertical className="text-3xl text-gray-300"/>
                <div className='flex gap-3 w-full'>
                  <CiSearch className="text-2xl font-thin"/>
                  <input type="search"
                  className="w-2/3 h-full text-md outline-none rounded-r-xl font-semibold"
                  placeholder="Search anything for your pet..."
                  />
                </div>
              </div>
          </div>

          <div className="w-1/4 bg-white flex items-center h-4/5 text-xl gap-3">
            <div className="flex items-center justify-center w-full gap-2 bg-green-light hover:bg-green rounded-xl cursor-pointer text-white py-2">
              <RiShoppingCartLine/>
              <h1 className='font-semibold'>My Cart</h1>
            </div>

            <div className="flex items-center justify-center w-full gap-2 rounded-xl cursor-pointer border-2 py-2">
              <CgProfile className='text-2xl'/>
              <h1>Accounts</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="navbarclass">
        
        <div className="md:hidden">
          <NavSm/>
        </div>

        <div className="hidden md:flex lg:hidden">
          <NavMd/>
        </div>

        <div className="hidden lg:flex">
          <NavLg/>
        </div>

      </nav>
    </>
  )
}

export default Navbar;