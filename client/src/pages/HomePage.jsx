import React from 'react';
import Category from '../Components/Category/Category';

const HomePage = () => {
  return (
    <>
    <div className=" items-center w-full h-full">
      <div className="flex px-2 items-center flex-col bg-sky-400 w-full h-full lg:h-80 lg:px-10">
          <div className="text-2xl lg:text-4xl pt-2 lg:my-2 lg:pb-4 cursor-pointer">
              Shop By Category
          </div>
          <Category/>
      </div>

      <div className="h-full w-full">
        <div className="h-full w-full mt-14">
          <img src="https://media.istockphoto.com/id/1399405977/photo/couple-of-friends-a-cat-and-a-dog-run-merrily-through-a-summer-flowering-meadow.jpg?b=1&s=170667a&w=0&k=20&c=1rxFB_UoZlV6kMKbQ11sMpaqeA_d2KFuPn3wB6osbMo="
          alt="PetImage"
          className="h-full w-full"
          />
        <div>
        </div>
          CUSTOMIZE YOUR PET!!
        </div>
        <button className="text-3xl border">
          Lets GO!
        </button>
      </div>

      <div>
        FOODS!
      </div>

      <div>
        TOYS!
      </div>

      <div>
        VET AVAILABLE SOON!!
      </div>

      <div>
        CLOTHS
      </div>

      <div>
        TOP ACCESSORIES
      </div>

      <div>
        KNOW YOUR PET!
      </div>

      <div>
        REVIEW
      </div>
    </div>
    </>
  )
};
export default HomePage;

