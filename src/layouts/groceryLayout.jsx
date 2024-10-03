import React from "react";
import Navbar from "../components/Grocery/Navbar/Navbar";
import Footer from "../components/Grocery/Footer/footer";

export default function GroceryLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container border border-red-600 m-auto min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}

