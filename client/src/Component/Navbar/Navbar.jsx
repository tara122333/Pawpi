import React from 'react';
import {VscLocation} from "react-icons/vsc";
import {TbChevronDown,TbChevronUp} from "react-icons/tb";
import {RxDividerVertical} from "react-icons/rx";
import {CgSearch,CgProfile} from "react-icons/cg";
import {RiShoppingCartLine} from "react-icons/ri";
import {FiMenu} from "react-icons/fi";
import LOGO from "../../pawpi_logo.png";

//for small devices/mobile
const NavSm=()=>{
  return(
    <>
      <div className="h-full w-full bg-red-400">
        <div className="w-full h-1/2 flex items-center">
          <div>
            <FiMenu/>
          </div>

          <div>
            <div>
              <img src={LOGO}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            Cart
          </div>
        </div>

        <div>
          <div>
            Location
          </div>
          <div>
            search
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