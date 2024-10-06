import React from "react";
import GroceryLayout from "../layouts/groceryLayout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Grocery/Home/home";
import GroceryFormLayout from "../layouts/groceryFormLayout";
import Login from "../components/Grocery/auth/login/Login";
import Register from "../components/Grocery/auth/register/register";
import ForgotPassword from "../components/Grocery/auth/forgot_password/forgot_password";

function GroceryRoutes() {
  return (
    <GroceryLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GroceryFormLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </GroceryFormLayout>
    </GroceryLayout>
  );
}

export default GroceryRoutes;
