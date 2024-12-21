import React from 'react';
import PropTypes from 'prop-types';
import './DailyUsageSelect.css'

const DailyUsageSelect = ({ selectedOption, handleOptionChange }) => {
  return (
    <div>
      <select
        id="chartType"
        value={selectedOption}
        onChange={handleOptionChange}
        className="select-usage" // Apply the CSS class
      >
        <option value="Kilometers">Kilometers</option>
        <option value="Time">Time</option>
      </select>
    </div>
  );
};

DailyUsageSelect.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};

export default DailyUsageSelect;