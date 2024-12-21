// import React, { useState } from 'react';

// const SelectBurn = () => {
//   const [selectedOption, setSelectedOption] = useState('batteryVsDistance');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       {/* <label htmlFor="chartType">Select Chart:</label> */}
//       <select id="chartType" value={selectedOption} onChange={handleOptionChange}>
//         <option value="batteryVsDistance">Battery v/s Distance</option>
//         <option value="batteryVsTime">Battery v/s Time</option>
//       </select>

//       {/* You can access the selected option using `selectedOption` in your parent component */}
//     </div>
//   );
// };

// export default SelectBurn;


// SelectBurn.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SelectBurn.css'; // Import the external CSS file
import { Text } from '@mantine/core';

const SelectBurn = ({ selectedOption, handleOptionChange }) => {
  return (
    <div>
      <select
        id="chartType"
        value={selectedOption}
        onChange={handleOptionChange}
        className="select-burn" // Apply the CSS class
      >
        <option value="batteryVsDistance">Battery v/s Distance</option>
        <option value="batteryVsTime">Battery v/s Time</option>
      </select>
    </div>
  );
};

SelectBurn.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};

export default SelectBurn;

