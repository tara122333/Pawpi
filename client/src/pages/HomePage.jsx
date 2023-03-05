import React from 'react';
import Category from '../Components/Category/Category';

const HomePage = () => {
  return (
    <>
    <div className="flex items-center flex-col w-full h-full md:px-2">
      <div className="flex items-start md:items-center flex-col bg-sky-400 w-full h-96 md:h-80 px-4 md:px-10">
          <div className="text-2xl md:text-4xl my-2 md:my-4 md:pb-4 cursor-pointer">
              Shop By Category
          </div>
          <div className="flex gap-4 ">
              <Category/>
          </div>
      </div>

      <div>
        <div className="h-full w-full">
          <img src="https://media.istockphoto.com/id/1399405977/photo/couple-of-friends-a-cat-and-a-dog-run-merrily-through-a-summer-flowering-meadow.jpg?b=1&s=170667a&w=0&k=20&c=1rxFB_UoZlV6kMKbQ11sMpaqeA_d2KFuPn3wB6osbMo="
          className="h-full w-full"
          />
        </div>
        <div>
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