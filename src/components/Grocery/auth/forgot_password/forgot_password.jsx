import React, { useState } from "react";
import Input from "../../../common/Input/Input";
import { useFormValidation } from "../../../../customeHooks/useFormValidation";
import { validateLoginForm } from "../../../../utils/validateLoginForm";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
      <h1 className="text-2xl font-semibold ">Forgot your password?</h1>
      <p className="mb-4 text-[#5c6c75] font-[500]">
        Please enter the email address associated with your account and We will
        email you a link to reset your password.
      </p>

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

      <button
        className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        onClick={() => handleSubmit(onSubmit)}
      >
        Reset Password
      </button>

      <div className="mt-6 text-green-500 text-center">
        <Link to="/Grocery-react/login" className="hover:underline">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
}
