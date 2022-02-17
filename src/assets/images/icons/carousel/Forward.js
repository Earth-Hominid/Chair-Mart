import React from 'react';

const Forward = ({ className }) => {
  return (
    <svg
      className={className}
      id="Button-Next-Previous"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <circle id="Container-button" cx="20" cy="20" r="20" fill="#ffe0c3" />
      <g
        id="Icon_chevron-down"
        data-name="Icon/chevron-down"
        transform="translate(8 8)"
      >
        <path
          id="Icon_material-keyboard-arrow-down"
          data-name="Icon material-keyboard-arrow-down"
          d="M6.557,6.533l5.067,5.056L16.69,6.533,18.247,8.09l-6.623,6.623L5,8.09Z"
          transform="translate(1.203 23.625) rotate(-90)"
        />
        <path
          id="Path_217"
          data-name="Path 217"
          d="M0,0H24V24H0Z"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default Forward;
