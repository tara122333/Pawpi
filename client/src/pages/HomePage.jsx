import React from 'react';
import Category from '../Components/Category/Category';

const HomePage = () => {
  return (
    <>
    <div className="flex items-center flex-col bg-blue-300 w-full h-80">
        <div className="text-4xl my-4 pb-4">
            Shop By Category!!
        </div>
        <div className="flex gap-4 mx-6">
            <Category/>
        </div>
    </div>
    </>
  )
};
export default HomePage;