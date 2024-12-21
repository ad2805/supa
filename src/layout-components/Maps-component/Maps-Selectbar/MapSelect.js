import { Input } from "@mantine/core";
import React from "react";
import downarrowIcon from "./../../../assets/icons/down arrow.png";
import "./MapSelect.css";

const MapSelect = ({ selectedOption, onChange }) => {
  const size = window.innerWidth <= 880 ? "sm" : "lg";
  return (
    <div className="select-bar-container">
      <Input
        value={selectedOption}
        onChange={onChange}
        variant="transparent"
        component="select"
        className="mapSelectBar"
        size={size}
        style={{ paddingLeft: "10px" }}
        leftSection={<img src={downarrowIcon} alt="Down Arrow" />}
      >
        <option value="India">India</option>
        <option value="AndhraPradesh">Andhra Pradesh</option>
        <option value="ArunachalPradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Delhi">Delhi</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="HimachalPradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="MadhyaPradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="TamilNadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="UttarPradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="WestBengal">West Bengal</option>
      </Input>
    </div>
  );
};

export default MapSelect;
