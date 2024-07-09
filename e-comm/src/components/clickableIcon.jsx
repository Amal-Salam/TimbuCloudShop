// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CiStar, CiHeart } from 'react-icons/ci';

// eslint-disable-next-line react/prop-types
const ClickableIcon = ({ type, onClick }) => {
  const [isActive, setIsActive] = useState(false); 

  const handleClick = () => {
    setIsActive(!isActive); // Toggle active state on click
    onClick && onClick(!isActive); // Call optional external onClick handler with the updated state
  };

  const IconComponent = type === 'heart' ? CiHeart : CiStar; // Dynamically choose icon
  const fill= isActive ? '#d09423' : 'gray'; // Set color based on active state

  return (
    <IconComponent onClick={handleClick} style={{ cursor: 'pointer', fill }}></IconComponent>
  );
};

export default ClickableIcon;
