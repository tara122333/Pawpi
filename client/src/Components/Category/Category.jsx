import React from 'react';

const CategoryCard=(props)=>{
    return (
        <>
            <div className="w-full h-52 flex justify-around bg-red-500 rounded-full relative overflow-hidden group">
                <img classname="w-full h-full" src={props.src} alt="Category Images" />
                <div className="absolute bg-black/20 h-full w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full">
                    {props.name}
                </div>
            </div>
        </>
    );
};

const Category = () => {
    const CategoryImage=[
        "https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png",
        "https://freepngimg.com/save/22193-adorable-cat/474x532",
        "https://www.pngall.com/wp-content/uploads/4/Dry-Dog-Food-PNG-Free-Download.png",
        "https://cdn.pixabay.com/photo/2017/06/20/15/57/dog-2423579__480.png",
        "https://cdn.pixabay.com/photo/2022/08/30/22/46/dog-toy-7422058__480.png",
        "https://png.pngtree.com/png-clipart/20211009/original/pngtree-pet-collar-yellow-bell-png-image_6842602.png",
    ];

  return (
    <>
        {CategoryImage.map((image)=>(
            <CategoryCard src={image} />
        ))}
    </>
  )
}

export default Category;