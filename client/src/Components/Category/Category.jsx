import React from 'react';

const CategoryCard=(props)=>{
    return (
        <>
            <div className="w-full h-52 flex cursor-pointer justify-around bg-yellow-500 rounded-full relative overflow-hidden group">
                <img classname="w-full h-full" src={props.src} alt="Category Images" />
                <div className="absolute bg-black/60 h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full">
                    <div className="text-2xl font-bold text-white">
                        {props.name}
                    </div>
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
        {CategoryImage.map((data)=>(
            <CategoryCard {...data} />
        ))}
    </>
  )
}

export default Category;