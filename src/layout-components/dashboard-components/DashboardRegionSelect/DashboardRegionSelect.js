// DashboardRegionSelect.js

import React from 'react';
import { Input } from '@mantine/core';
import downarrowIcon from "./../../../assets/icons/down arrow.png";

const DashboardRegionSelect = ({ onChange }) => {
  const states = [
    { value: 'India', label: 'India' },
    { value: 'AndhraPradesh', label: 'Andhra Pradesh' },
    { value: 'ArunachalPradesh', label: 'Arunachal' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'HimachalPradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'MadhyaPradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Puducherry', label: 'Puducherry' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'TamilNadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'UttarPradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'WestBengal', label: 'West Bengal' },
    { value: 'JammuAndKashmir', label: 'Jammu & Kashmir' },
  ];

  const handleRegionChange = (event) => {
    onChange(event);
  };

  return (
    <Input
      variant="transparent"
      component="select"
      size='20px'
      style={{ paddingLeft: '10px' }}
      leftSection={<img src={downarrowIcon} alt="Down Arrow" />}
      onChange={handleRegionChange} 
      // value="India" 
    >
      {states.map((state) => (
        <option key={state.value} value={state.value}>
          {state.label}
        </option>
      ))}
    </Input>
  );
};

export default DashboardRegionSelect;
