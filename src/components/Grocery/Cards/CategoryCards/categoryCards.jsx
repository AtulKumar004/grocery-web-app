import React from "react";
import categoryImg from "../../../../images/dairy-bread-eggs.png";

export default function CategoryCards({categoryName , image_url}) {
  return (
    <div className=" gap-2 col-span-1 flex flex-col items-center">
      <div className="w-[6rem]  h-[6rem] bg-[#f2f4f3] cursor-pointer rounded-full flex justify-center items-center overflow-hidden border">
        <img className="w-12/12 h-auto " src = {categoryImg} alt="categoryImg" />
      </div>
      <p className="text-[#21313c] text-center font-[500]">{categoryName} </p>
    </div>
  );
}
