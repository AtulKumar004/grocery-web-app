import React, { useState } from "react";
import Input from "../../../common/Input/Input";
import { useFormValidation } from "../../../../customeHooks/useFormValidation";
import { validateLoginForm } from "../../../../utils/validateLoginForm";
import { Link } from "react-router-dom";

export default function Register() {
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
    <div className=" xl:p-30 lg:p-20 md:p-15  p-8 w-full ">
      <h1 className="text-2xl font-semibold ">Get Start Shopping</h1>
      <p className="mb-4 text-[#5c6c75] font-[500]">Welcome to FreshCart! Enter your email to get started.</p>
      <div className="form_group">
        <div className="mb-4 form_item ">
          <Input
            type="text"
            label="First Name"
            placeholder = "Enter first name"
            name="email"
            value={formData?.first_name}
            onChange={handleChange}
          />
          {errors.first_name && (
            <p className="text-red-500">{errors.first_name}</p>
          )}
        </div>
        <div className="mb-4 form_item">
          <Input
            type="text"
            label="Last Name"
            placeholder = "Enter last name"
            name="email"
            value={formData?.last_name}
            onChange={handleChange}
          />
          {errors.last_name && (
            <p className="text-red-500">{errors.last_name}</p>
          )}
        </div>
      </div>

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
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>

      <button
        className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        onClick={() => handleSubmit(onSubmit)}
      >
        Register 
      </button>

      <div className="mt-6 text-green-500 text-center">
       
        <Link to="/Grocery-react/login" className="hover:underline">
        Already have an account? Sign in
      </Link>
      </div>
    </div>
  );
}
