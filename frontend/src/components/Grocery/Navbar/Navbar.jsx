import React from "react";

import GroceryLogo from "../../../images/Grocerylogo.png";
import SearchInput from "../Search/SearchInput";
import { Link } from "react-router-dom";
import DropDown from "../../common/Dropdown/dropdown";


export default function Navbar() {
  const AccountTabs = [
    {
      title: "Sign In",
      href: "#",
    },
    {
      title: "Sign up",
      href: "#",
    },
    {
      title: "Forgot Password",
      href: "#",
    },
  ];
  return (
    <div className=" border-b-[2px]">
      <div className="grid grid-cols-8 gap-3 py-4 md:px-2  sm:px-4 px-3 container m-auto  items-center">
        <div className=" ">
          <img src={GroceryLogo} alt="grocery_logo" className="w-[200px]  " />
        </div>
        <div className=" col-start-2 col-span-3 ">
          <SearchInput place_holder="Type to search.." />
        </div>
        <div className=" flex-1 col-start-5 col-span-3 flex items-center gap-4   ">
          <Link className="font-[600]" >Home</Link>
          <Link  className="font-[600]"  >Store </Link>
          <Link  className="font-[600]" >Products </Link>
          <Link  className="font-[600]" >Categories </Link>
          <DropDown title="Account" tabs={AccountTabs} />
        </div>
        {/* <div className="border  ">

        </div> */}
      </div>
    </div>
  );
}
