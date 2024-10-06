import { rect } from "framer-motion/client";
import React, { useState } from "react";


export function useFormValidation(initialState, validate) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (callback) => {
    const validationError = validate(formData);
    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      callback();
    } else {
      setIsSubmit(false);
    }
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    errors,
    isSubmit,
  };
}
