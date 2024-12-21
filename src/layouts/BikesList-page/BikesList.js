// import { Paper, Text, Box, Flex } from "@mantine/core";
// import React, { useState } from "react";
// import VehicleListTable from "./../../layout-components/VehicleList-components/VehicleListTable/VehicleListTable";
// import SearchVechileSearchBox from "./../../layout-components/SearchBike-components/SearchBikeSearchBox/SearchBikeSearchBox";
// import VehicleListData from "./../../data/VehicleList-data/VehicleListData.json";
// import VehicleListSearchBox from "./../../layout-components/VehicleList-components/VehicleListSearchBox/VehicleListSearchBox";

// export default function VehicleList() {
//     const [searchValue, setSearchValue] = useState("");

//     const handleSearch = (value) => {
//       setSearchValue(value);
//     };

//   return (
//     <Paper m="5px" p="5px" bg="transparent" mih="90vh">
//       <Flex justify="space-between" m="md">
//         <Text  size="24px">
//           Vehicle list
//         </Text>
//         <VehicleListSearchBox onSearch={handleSearch} />
//       </Flex>

//       <Paper p="md" bg="#FFFFFF80">
//         <Paper m="md">
//           <VehicleListTable searchValue={searchValue}  />
//         </Paper>
//       </Paper>
//     </Paper>
//   );
// }

// import { Paper, Text, Flex, TextInput } from "@mantine/core";
// import React, { useState } from "react";
// import { IconSearch } from "@tabler/icons-react"; // Import IconSearch
// import VehicleListTable from "./../../layout-components/VehicleList-components/VehicleListTable/VehicleListTable";

// export default function VehicleList() {
//   const [search, setSearch] = useState(""); // State for search input value

//   const handleSearchChange = (event) => {
//     setSearch(event.currentTarget.value); // Update search input value
//   };

//   return (
//     <Paper m="5px" p="5px" bg="transparent" mih="90vh">
//       <Flex justify="space-between" m="md">
//         <Text size="24px">Vehicle list</Text>
//         {/* Search input */}
// <TextInput
//   placeholder="Search by any field"
//   mb="md"
//   style={{ width: "20%" }}
//   leftSection={<IconSearch style={{ width: "1.25rem", height: "1.25rem" }} />}
//   value={search}
//   onChange={handleSearchChange}
// />
//       </Flex>

//       <Paper p="md" bg="#FFFFFF80">
//         <Paper m="md">
//           {/* Pass search state to TableSort component */}
//           <VehicleListTable search={search} />
//         </Paper>
//       </Paper>
//     </Paper>
//   );
// }
import * as React from "react";
import { Paper, Text, Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import BikeListTable from "./../../layout-components/BikeList-components/BikeListTable/BikeListTable";
import "./BikesList.css";

export default function BikesList() {
  const [search, setSearch] = React.useState("");
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFromDateChange = (date) => {
    // Ensure date is not null before converting it to a Date object
    setFromDate(date ? new Date(date) : null);
  };

  const handleToDateChange = (date) => {
    // Ensure date is not null before converting it to a Date object
    setToDate(date ? new Date(date) : null);
  };

  return (
    <Paper m="5px" p="5px" bg="transparent" mih="90vh">
      <Flex justify="space-between" m="5px" align="center" pb="md" className="BikeListTitle">
        <Text size="24px">Bikes List</Text>
        <Flex justify="space-between" align="center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="From date"
                value={fromDate}
                onChange={handleFromDateChange}
                renderInput={(params) => <TextInput {...params} />}
                format="DD/MM/YYYY"
              />
              <DatePicker
                label="To date"
                value={toDate}
                onChange={handleToDateChange}
                renderInput={(params) => <TextInput {...params} />}
                format="DD/MM/YYYY"
              />
            </DemoContainer>
          </LocalizationProvider>

          <TextInput
            placeholder="Search by any field"
            mb="md"
            style={{ width: "30%" }}
            leftSection={
              <IconSearch style={{ width: "1.25rem", height: "1.25rem" }} />
            }
            value={search}
            onChange={handleSearchChange}
          />
        </Flex>
      </Flex>

      <Paper p="md" bg="#FFFFFF80">
        <Paper m="md">
          <BikeListTable search={search} fromDate={fromDate} toDate={toDate} />
        </Paper>
      </Paper>
    </Paper>
  );
}
