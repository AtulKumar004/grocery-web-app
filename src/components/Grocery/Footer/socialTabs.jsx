import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import PropTypes from 'prop-types';

function SocialTabs( {SocialIcon} ) {
  return (
    <div className="w-10 h-10 flex items-center justify-center cursor-pointer border bg-transparent hover:bg-white transitio duration-100 ease-linear">
      <SocialIcon />
    </div>
  );
}

SocialTabs.propTypes = {
    SocialIcon: PropTypes.element.isRequired, // Ensures 'comp' is a React element
  };
  export default SocialTabs;