import React from "react";
import Navbar from "../components/Grocery/Navbar/Navbar";
import Footer from "../components/Grocery/Footer/footer";

export default function GroceryLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container  m-auto min-h-[15rem]">{children}</div>
      <Footer />
    </div>
  );
}

