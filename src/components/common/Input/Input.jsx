import React from "react";

import styles from "./input.module.scss";
import PropTypes from "prop-types";

const Input = React.memo(function Input({
  placeholder = "",
  name,
  type = "text",
  onChange,
  label,
  
  value = ""


}) {

    console.log("Rerenderding -====================")
  return (
    <div className="w-full">
      <label className="">{label}</label>
      <input
        className={styles._input}
        placeholder={placeholder}
        type={type}
        name={name}
        value = {value}
        onChange={onChange}
      />

   
    </div>
  );
});

Input.PropTypes = {
    place_holder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

}


export default Input;