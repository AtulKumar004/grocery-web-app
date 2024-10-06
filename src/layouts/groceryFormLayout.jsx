import React from "react";
import Navbar from "../components/Grocery/Navbar/Navbar";
import Footer from "../components/Grocery/Footer/footer";
import signInImg from "../images/signin.svg";

export default function GroceryFormLayout({ children }) {
  return (
    <div className="grid md:grid-cols-2 h-full min-h-[15rem]  ">
      <div className="col-span-1 md:flex hidden  items-center h-full  justify-center py-16 ">
        <img
          src={signInImg}
          alt="Login"
          className="w-9/12"
        />
      </div>
      <div className="col-span-1  h-full  py-16">
        {children}
      </div>
    </div>
  );
}
