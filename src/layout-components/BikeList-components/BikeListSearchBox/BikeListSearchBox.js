import React, { useState } from "react";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function VehicleListSearchBox({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        placeholder="Search"
        value={searchValue}
        rightSection={< IconSearch/>}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        onBlur={handleSearch}
      />
    </div>
  );
}
