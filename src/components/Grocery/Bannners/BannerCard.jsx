import React from "react";
import classNames from "classnames";

function AddBanner({ bannerImg, code, heading, description }) {
  return (
    <div
      className={classNames({
        " rounded-lg xl:p-8 md:px-4 px-2 xl:py-4 md:py-2 py-1  ": true,
      })}
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // fixed height example, adjust as needed
      }}
    >
      <div className="xl:w-9/12 md:w-8/12 w-full  flex flex-col gap-1  p-6 rounded-lg">
        <h3 className="text-[#000] font-[700] xl:text-2xl md:text-xl text-sm">
          {heading}
        </h3>

        <p className="text-[#5c6c75]text-[#5c6c75] xl:text-lg text-sm font-[600]">
          {description}
        </p>
        
        {code && (
          <p className="xl:text-lg text-base text-[#000] font-[600]">
            Code: <span>{code}</span>
          </p>
        )}

        <button className="px-4 py-2 w-7/12 bg-[#001e2b] mt-3 text-white flex items-center justify-center rounded-md font-[600] ">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default AddBanner;
