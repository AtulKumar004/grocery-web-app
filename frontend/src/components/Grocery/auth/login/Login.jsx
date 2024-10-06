import React, { useState } from "react";
import Input from "../../../common/Input/Input";
import { useFormValidation } from "../../../../customeHooks/useFormValidation";
import { validateLoginForm } from "../../../../utils/validateLoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    initialState,
    validateLoginForm
  );

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full ">
      <h1 className="text-2xl font-semibold mb-4">Sign in to FreshCart</h1>

      <div className="mb-4 ">
        <Input
          type="text"
          label="Email"
          name="email"
          value={formData?.email}
          onChange={handleChange}
          error={errors.email}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <Input
          type="password"
          label="Password"
          name="password"
          value={formData?.password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="text-red-500"
        />
        <label for="remember" className="text-green-900 ml-2">
          Remember Me
        </label>
      </div>

      <div className="mb-6 text-blue-500">
        <Link to="/Grocery-react/forgot_password" className="hover:underline">
          Forgot Password?
        </Link>
      </div>

      <button
        className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        onClick={() => handleSubmit(onSubmit)}
      >
        Login
      </button>

      <div className="mt-6 text-green-500 text-center">
        <Link to="/Grocery-react/sign_up" className="hover:underline">
          Sign up Here
        </Link>
      </div>
    </div>
  );
}
