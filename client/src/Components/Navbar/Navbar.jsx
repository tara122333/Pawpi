import React, { useState } from 'react';
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
      <div className="h-24 w-full shadow-lg py-1 bg-creame">
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
  const [isTemp , setIsTemp] = useState(false);
  return(
    <>
      <div className="flex items-center justify-between px-12 py-2 h-20 w-full bg-creame shadow-xl">
          <div className="w-1/7 h-full flex items-center justify-center">
            <div className="w-24 h-20 cursor-pointer">
            <img src={LOGO}
            alt="logo"
            className="w-full h-full"
            />
            </div>
          </div>

          <div className="flex items-center w-3/5 h-4/5 mx-4 gap-1 bg-white px-2 rounded-3xl border border-black shadow-md shadow-slate-500">
            <VscLocation className="text-4xl"/>
             
              <input type="search"
              className="w-1/5 h-full text-md text-blue-500 outline-none "
              placeholder="Location "
              onClick={ ()=> setIsTemp((prev)=> !prev) }
              />

              <div className="text-2xl flex items-center py-2 cursor-pointer">
                {
                  isTemp ? <TbChevronUp onClick={ ()=> setIsTemp((prev)=> !prev) }/> : <TbChevronDown onClick={ ()=> setIsTemp((prev)=> !prev) } />
                }
              </div>

              <RxDividerVertical className="text-4xl"/>
              <CgSearch className="text-2xl "/>
              
              <input type="search"
              className="w-2/3 h-full text-md text-blue-500 outline-none rounded-r-xl"
              placeholder="Search anything for your pet..."
              />
          </div>

          <div className="w-1/5 flex items-center h-4/5 text-xl gap-3">
            <div className="flex items-center justify-center w-full gap-2 py-2 bg-royal-green text-white hover:bg-orange-200 hover:border border-blue-700 rounded-xl hover:text-blue-700 cursor-pointer">
              <RiShoppingCartLine className="text-3xl"/>
              <h1>My Cart</h1>
            </div>
          </div>

          <div className="w-1/12 flex justify-center items-center h-4/5 text-4xl pl-4 cursor-pointer">
            <FiMenu/>
          </div>
      </div>
    </>
  );
};

//for large devices
const NavLg=()=>{
  const [isTemp , setIsTemp] = useState(false);
  return(
    <>
      <div className="w-full h-32 bg-creame shadow-xl pt-1">
        <div className="flex items-center justify-between px-12 py-2 h-1/2 w-full">
          <div className="w-1/6 h-full flex items-center justify-center">
            <div className="w-24 h-20 cursor-pointer">
            <img src={LOGO}
            alt="logo"
            className="w-full h-full"
            />
            </div>
          </div>

          <div className="flex items-center w-3/5 h-4/5 mx-4 gap-2 bg-white px-2 rounded-3xl border border-black shadow-md shadow-slate-500">
            <VscLocation className="text-4xl"/>
             
              <input type="search"
              className="w-44 h-full text-md text-blue-500 outline-none "
              placeholder="Location "
              onClick={ ()=> setIsTemp((prev)=> !prev) }
              />

              <div className="text-2xl flex items-center py-2 cursor-pointer">
                {
                  isTemp ? <TbChevronUp onClick={ ()=> setIsTemp((prev)=> !prev) }/> : <TbChevronDown onClick={ ()=> setIsTemp((prev)=> !prev) } />
                }
              </div>

              <RxDividerVertical className="mx-2 text-4xl"/>
              <CgSearch className="text-2xl "/>
              
              <input type="search"
              className="w-2/3 h-full text-md text-blue-500 outline-none rounded-r-xl"
              placeholder="Search anything for your pet..."
              />
          </div>

          <div className="w-1/4 flex items-center h-4/5 text-xl gap-3">
            <div className="flex items-center justify-center w-full gap-2 py-2 bg-royal-green text-white hover:bg-orange-200 hover:border border-blue-700 rounded-xl hover:text-blue-700 cursor-pointer">
              <RiShoppingCartLine className="text-3xl"/>
              <h1>My Cart</h1>
            </div>

            <div className="flex items-center justify-center w-full gap-2 py-2 bg-royal-green text-white hover:bg-orange-200 hover:border border-blue-700 rounded-xl hover:text-blue-700 cursor-pointer">
              <CgProfile className="text-3xl"/>
              <h1>Account</h1>
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
      <nav>
        
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