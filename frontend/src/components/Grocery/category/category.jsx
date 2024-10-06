import React from "react";
import CategoryCards from "../Cards/CategoryCards/categoryCards";
import categoriesData from "../../../utils/categoryData.json";

function Category() {
  return (
    <div className="w-full flex flex-col gap-4 items-center py-4">
      <h3 className="xl:text-2xl text-xl font-[600] ">Shop Popular Categories</h3>
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {categoriesData.map((data, idx) => {
          return (
            <CategoryCards
              key={data?.id}
              image_url={data?.image_url}
              categoryName={data?.categoryName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;
