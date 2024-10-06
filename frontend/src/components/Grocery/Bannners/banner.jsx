import React from "react";

import bannerImg from "../../../images/stores-logo-2.svg";

export default function Banner() {
  return (
        <div className="w-full   bg-[#f0f3f2] rounded-lg xl:px-8  px-4  sm:py-2 flex items-center xl:justify-between md:flex-row flex-col">
      <div className="flex md:flex-row flex-col  items-center gap-3">
        <div className="w-32 h-32">
          <img className="w-full h-full " src={bannerImg} alt="bannerImg" />
        </div>
        <div>
          <h3 className="xl:text-2xl md:text-xl text-base font-[700] ">
            Welcome to FreshCart
          </h3>
          <span className="text-sm font-[500] text-[#5c6c75] ">
            Download the app get free food &amp;{" "}
                <span class="text-[#0aad0a] ">$30</span> off on your first order.
          </span>
        </div>
      </div>
      <div>
        <button className="px-4 py-2 bg-[#001e2b] text-white flex items-center justify-center rounded-md font-[600] ">
          Download Fresg Cart App
        </button>
      </div>
    </div>
  );
}
