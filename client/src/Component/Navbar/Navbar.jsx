import React from 'react';
import {VscLocation} from "react-icons/vsc";
import {TbChevronDown,TbChevronUp} from "react-icons/tb";
import {RxDividerVertical} from "react-icons/rx";
import {CgSearch,CgProfile} from "react-icons/cg";
import {RiShoppingCartLine} from "react-icons/ri";
import {FiMenu} from "react-icons/fi";
import {MdOutlineLocationOn} from "react-icons/md";
import LOGO from "../../pawpi_logo.png";

//for small devices/mobile
const NavSm=()=>{
  return(
    <>
      <div className="h-24 w-full shadow-lg shadow-slate-500 bg-creame">
        <div className="w-full h-3/5 flex items-center justify-around px-2 ">
          <div className="w-1/5 h-full flex items-center justify-start">
            <FiMenu className="text-2xl"/>
          </div>

          <div className="w-3/5 h-full flex justify-center">
            <div className="w-36 h-24">
              <img src={LOGO}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="w-28 py-1 flex items-center gap-1 justify-center bg-royal-green text-white rounded-xl">
            <RiShoppingCartLine className="text-2xl"/>
            <div className="text-xl">
              <h1>Cart</h1>
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex items-center justify-between px-2 py-2">
          <div className="w-1/3 h-full flex items-center justify-start">
              <CgSearch className="text-2xl"/>
          </div>
          
          <div className="w-1/3 h-full flex items-center justify-end gap-1">
            <MdOutlineLocationOn className="text-2xl"/>
            <div className="text-xl">
              <h1>Location</h1>
            </div>
          </div>
          
        </div>

      </div>
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
  return(
    <>
      <div className="w-full h-32 ">
        <div className="flex items-center justify-between px-12 py-2 h-1/2 w-full">
          <div className="w-1/6 h-full flex items-center justify-center">
            <div className="w-24 h-20 ">
            <img src={LOGO}
            alt="logo"
            className="w-full h-full"
            />
            </div>
          </div>

          <div className="flex items-center w-3/5 h-4/5 mx-4 gap-2 bg-white px-2 rounded-3xl border border-black shadow-md shadow-slate-500">
            <VscLocation className="text-4xl"/>
             
              <input type="search"
              className="w-44 h-full text-md text-blue-500 outline-none"
              placeholder="Location "
              />

              <div className="text-2xl flex items-center py-2">
                <TbChevronDown />
                <TbChevronUp />
              </div>

              <RxDividerVertical className="mx-2 text-4xl"/>
              <CgSearch className="text-2xl "/>
              
              <input type="search"
              className="w-2/3 h-full text-md text-blue-500 outline-none rounded-r-xl"
              placeholder="Search anything for your pet..."
              />
          </div>

          <div className="w-1/4 bg-white flex items-center h-4/5 text-xl">
            <div className="flex items-center justify-center w-full gap-2 hover:bg-orange-300 hover:border border-blue-500 rounded-xl hover:text-blue-500 cursor-pointer">
              <RiShoppingCartLine/>
              <h1>My Cart</h1>
            </div>

            <div className="flex items-center justify-center w-full gap-2 hover:bg-orange-300 hover:border border-blue-500 rounded-xl hover:text-blue-500 cursor-pointer">
              <CgProfile/>
              <h1>My Profile</h1>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center px-12 py-2  h-1/2 text-xl">
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>Dogs</h1>
          </div>
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>Cats</h1>
          </div>
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>Shop By Brands</h1>
          </div>
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>Know Your Pet</h1>
          </div>
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>Vet</h1>
          </div>
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>About Us!</h1>
          </div>
          <div className="w-1/6 flex justify-center hover:text-blue-500 hover:text-2xl cursor-pointer">
            <h1>Join Us</h1>
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