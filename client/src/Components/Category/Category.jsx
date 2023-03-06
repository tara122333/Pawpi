import React from 'react';

const CategoryCard=(props)=>{
    return (
        <>
            {/*Large Screen*/}
            <div className="hidden lg:flex w-full h-52 cursor-pointer justify-around bg-yellow-500 rounded-full relative overflow-hidden group">
                <img classname="w-full h-full" src={props.src} alt="Category Images" />
                <div className="absolute bg-black/60 h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full">
                    <div className="text-2xl font-bold text-white">
                        {props.name}
                    </div>
                </div>
            </div>
            {/*Medium screen*/}
            <div className="hidden md:flex lg:hidden flex-col h-72 w-3/12 items-center justify-around my-4">
                <div className="h-full w-full flex flex-col bg-yellow-500 rounded-full">
                    <img className="w-full h-full" src={props.src} alt="CategoryImage"/>
                </div>
                <div className="text-2xl">
                    {props.name}
                </div>
            </div>
            {/*Small Screen*/}
            <div className="flex flex-col h-48 w-2/5 items-center justify-around md:hidden my-4 ">
                <div className="h-full w-full flex flex-col bg-yellow-500 rounded-full">
                    <img className="w-full h-full" src={props.src} alt="CategoryImage"/>
                </div>
                <div className="text-xl">
                    {props.name}
                </div>
            </div>
        </>
    );
};

const Category = () => {
    const CategoryImage=[
        {
            src: "https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png",
            name: "DOG"
        },
        {
            src: "https://freepngimg.com/save/22193-adorable-cat/474x532",
            name: "CAT"
        },
        {
            src: "https://www.pngall.com/wp-content/uploads/4/Dry-Dog-Food-PNG-Free-Download.png",
            name: "FOOD"
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/06/20/15/57/dog-2423579__480.png",
            name: "CLOTHS"
        },
        {
            src: "https://cdn.pixabay.com/photo/2022/08/30/22/46/dog-toy-7422058__480.png",
            name: "TOYS"
        },
        {
            src: "https://png.pngtree.com/png-clipart/20211009/original/pngtree-pet-collar-yellow-bell-png-image_6842602.png",
            name: "ACCESSORIES"
        },
    ];

  return (
    <>
        <div className="hidden lg:flex gap-4">
            {CategoryImage.map((data)=>(
                <CategoryCard {...data} />
            ))}
        </div>
        <div className="flex flex-wrap md:hidden w-full h-full py-4 justify-around">
             {CategoryImage.map((data)=>(
                <CategoryCard {...data} />
            ))}
        </div>
        <div className="md:flex flex-wrap hidden lg:hidden w-full h-full gap-3 justify-around">
             {CategoryImage.map((data)=>(
                <CategoryCard {...data} />
            ))}
        </div>
    </>
  )
}

export default Category;