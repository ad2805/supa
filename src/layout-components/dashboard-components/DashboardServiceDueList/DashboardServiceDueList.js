// import * as React from "react";
// import { Paper, Text, Flex, TextInput } from "@mantine/core";
// import { IconSearch } from "@tabler/icons-react";
// // import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

// import VehicleListTable from "./../../../data/VehicleList-data/VehicleListData.json";

// export default function DashboardServiceDueList() {
//   const [search, setSearch] = React.useState("");
//   const [fromDate, setFromDate] = React.useState(null);
//   const [toDate, setToDate] = React.useState(null);

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const handleFromDateChange = (date) => {
//     setFromDate(date);
//   };

//   const handleToDateChange = (date) => {
//     setToDate(date);
//   };

//   return (
//     <Paper m="5px" p="5px" bg="transparent" mih="90vh">
//       <Flex justify="space-between" m="5px"  align="center" pb="md">
//         <Text size="24px">Vehicle list</Text>
//         <Flex justify="space-between" align="center" >
//           {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={["DatePicker"]}>
//               <DatePicker
//                 label="From date"
//                 value={fromDate}
//                 onChange={handleFromDateChange}
//                 renderInput={(params) => <TextInput {...params} />}

//               />
//               <DatePicker
//                 label="To date"
//                 value={toDate}
//                 onChange={handleToDateChange}
//                 renderInput={(params) => <TextInput {...params} />}

//               />
//             </DemoContainer>
//           </LocalizationProvider> */}

//           <TextInput
//             placeholder="Search by any field"
//             mb="md"
//             style={{ width: "30%" }}
//             leftSection={
//               <IconSearch style={{ width: "1.25rem", height: "1.25rem" }} />
//             }
//             value={search}
//             onChange={handleSearchChange}
//           />
//         </Flex>
//       </Flex>

//       <Paper p="md" bg="#FFFFFF80">
//         <Paper m="md">
//           <VehicleListTable
//             search={search}
//             fromDate={fromDate}
//             toDate={toDate}
//           />
//         </Paper>
//       </Paper>
//     </Paper>
//   );
// }

// import React from "react";
// import { Table, ScrollArea, Text, Paper } from "@mantine/core";
// import VehicleListTable from "./../../../data/VehicleList-data/VehicleListData.json";

// const DashboardServiceDueList = ({ search, fromDate, toDate }) => {
//   const filteredData = VehicleListData.filter((item) => {
//     const query = search.toLowerCase().trim();
//     const registrationDate = new Date(item.vehicleRegistrationDate);

//     // Check if vehicle registration date falls within the specified range
//     const fromDateValid = !fromDate || registrationDate >= fromDate;
//     const toDateValid = !toDate || registrationDate <= toDate;

//     return fromDateValid && toDateValid && Object.values(item).some((value) =>
//       value.toLowerCase().includes(query)
//     );
//   });

//   const rows = filteredData.map((row, index) => (
//     <Table.Tr key={index}>
//       <Table.Td>{row.ownerName}</Table.Td>
//       <Table.Td>{row.registrationNumber}</Table.Td>
//       <Table.Td>{row.chassisNumber}</Table.Td>
//       <Table.Td>{row.vehicleRegistrationDate}</Table.Td>
//       <Table.Td>{row.address}</Table.Td>
//     </Table.Tr>
//   ));

//   return (
//     <Paper>
//       <ScrollArea>
//         <Table
//           striped
//           highlightOnHover
//           withTableBorder
//           withColumnBorders
//           horizontalSpacing="md"
//           verticalSpacing="md"
//           miw={700}
//           layout="fixed"
//         >
//           <Table.Tbody>
//             <Table.Tr>
//               <Table.Th>Owner Name</Table.Th>
//               <Table.Th>Reg. Number</Table.Th>
//               <Table.Th>Chassis Number</Table.Th>
//               <Table.Th>Reg. Date</Table.Th>
//               <Table.Th>Address</Table.Th>
//             </Table.Tr>
//           </Table.Tbody>
//           <Table.Tbody>
//             {rows.length > 0 ? (
//               rows
//             ) : (
//               <Table.Tr>
//                 <Table.Td colSpan={5}>
//                   <Text fw={500} ta="center">
//                     Nothing found
//                   </Text>
//                 </Table.Td>
//               </Table.Tr>
//             )}
//           </Table.Tbody>
//         </Table>
//       </ScrollArea>
//     </Paper>
//   );
// };

// export default DashboardServiceDueList;

// import React from "react";
// import { Table, ScrollArea, Text, Paper } from "@mantine/core";
// import VehicleListData from "./../../../data/VehicleList-data/VehicleListData.json";

// const DashboardServiceDueList = ({ search, fromDate, toDate }) => {
// //   const filteredData = VehicleListData.filter((item) => {
// //     const query = search.toLowerCase().trim();
// //     const registrationDate = new Date(item.vehicleRegistrationDate);

// //     // Check if vehicle registration date falls within the specified range
// //     const fromDateValid = !fromDate || registrationDate >= fromDate;
// //     const toDateValid = !toDate || registrationDate <= toDate;

// //     return fromDateValid && toDateValid && Object.values(item).some((value) =>
// //       value.toLowerCase().includes(query)
// //     );
// //   });

//   const rows = VehicleListData.map((row, index) => (
//     <Table.Tr key={index}>
//       <Table.Td>{row.ownerName}</Table.Td>
//       <Table.Td>{row.registrationNumber}</Table.Td>
//       <Table.Td>{row.chassisNumber}</Table.Td>
//       <Table.Td>{row.vehicleRegistrationDate}</Table.Td>
//       <Table.Td>{row.address}</Table.Td>
//     </Table.Tr>
//   ));

//   return (
//     <Paper>
//       <ScrollArea>
//         <Table
//           striped
//           highlightOnHover
//           withTableBorder
//           withColumnBorders
//           horizontalSpacing="md"
//           verticalSpacing="md"
//           miw={700}
//           layout="fixed"
//         >
//           <Table.Tbody>
//             <Table.Tr>
//               <Table.Th>Owner Name</Table.Th>
//               <Table.Th>Reg. Number</Table.Th>
//               <Table.Th>Chassis Number</Table.Th>
//               <Table.Th>Reg. Date</Table.Th>
//               <Table.Th>Address</Table.Th>
//             </Table.Tr>
//           </Table.Tbody>
//           <Table.Tbody>
//             {rows.length > 0 ? (
//               rows
//             ) : (
//               <Table.Tr>
//                 <Table.Td colSpan={5}>
//                   <Text fw={500} ta="center">
//                     Nothing found
//                   </Text>
//                 </Table.Td>
//               </Table.Tr>
//             )}
//           </Table.Tbody>
//         </Table>
//       </ScrollArea>
//     </Paper>
//   );
// };

// export default DashboardServiceDueList;

// import React, { useState, useEffect } from "react";
// import {
//   Table,
//   ScrollArea,
//   UnstyledButton,
//   Group,
//   Text,
//   Center,
//   TextInput,
//   rem,
//   Paper,
// } from "@mantine/core";
// import { IconSearch, IconSelector, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
// import classes from "./TableSort.module.css";

// const data = [
//   {
//     name: "Athena Weissnat",
//     company: "Little - Rippin",
//     email: "Elouise.Prohaska@yahoo.com",
//   },
//   {
//     name: "Deangelo Runolfsson",
//     company: "Greenfelder - Krajcik",
//     email: "Kadin_Trantow87@yahoo.com",
//   },
//   {
//     name: "Danny Carter",
//     company: "Kohler and Sons",
//     email: "Marina3@hotmail.com",
//   },
//   {
//     name: "Trace Tremblay PhD",
//     company: "Crona, Aufderhar and Senger",
//     email: "Antonina.Pouros@yahoo.com",
//   },
//   {
//     name: "Derek Dibbert",
//     company: "Gottlieb LLC",
//     email: "Abagail29@hotmail.com",
//   },
//   {
//     name: "Viola Bernhard",
//     company: "Funk, Rohan and Kreiger",
//     email: "Jamie23@hotmail.com",
//   },
//   {
//     name: "Austin Jacobi",
//     company: "Botsford - Corwin",
//     email: "Genesis42@yahoo.com",
//   },
//   {
//     name: "Hershel Mosciski",
//     company: "Okuneva, Farrell and Kilback",
//     email: "Idella.Stehr28@yahoo.com",
//   },
//   {
//     name: "Mylene Ebert",
//     company: "Kirlin and Sons",
//     email: "Hildegard17@hotmail.com",
//   },
//   {
//     name: "Lou Trantow",
//     company: "Parisian - Lemke",
//     email: "Hillard.Barrows1@hotmail.com",
//   },
//   {
//     name: "Dariana Weimann",
//     company: "Schowalter - Donnelly",
//     email: "Colleen80@gmail.com",
//   },
//   {
//     name: "Dr. Christy Herman",
//     company: "VonRueden - Labadie",
//     email: "Lilyan98@gmail.com",
//   },
//   {
//     name: "Katelin Schuster",
//     company: "Jacobson - Smitham",
//     email: "Erich_Brekke76@gmail.com",
//   },
//   {
//     name: "Melyna Macejkovic",
//     company: "Schuster LLC",
//     email: "Kylee4@yahoo.com",
//   },
//   {
//     name: "Pinkie Rice",
//     company: "Wolf, Trantow and Zulauf",
//     email: "Fiona.Kutch@hotmail.com",
//   },
//   {
//     name: "Brain Kreiger",
//     company: "Lueilwitz Group",
//     email: "Rico98@hotmail.com",
//   },
// ];

// function Th({ children, reversed, sorted, onSort }) {
//   const Icon = sorted
//     ? reversed
//       ? IconChevronUp
//       : IconChevronDown
//     : IconSelector;
//   return (
//     <Table.Th className={classes.th}>
//       <UnstyledButton onClick={onSort} className={classes.control}>
//         <Group justify="space-between">
//           <Text fw={500} fz="sm">
//             {children}
//           </Text>
//           <Center className={classes.icon}>
//             <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
//           </Center>
//         </Group>
//       </UnstyledButton>
//     </Table.Th>
//   );
// }

// function filterData(data, search = '') {
//     const query = search.toLowerCase().trim();
//     return data.filter((item) =>
//       Object.values(item).some((value) => value.toLowerCase().includes(query))
//     );
//   }
// function sortData(data, payload) {
//   const { sortBy } = payload;

//   if (!sortBy) {
//     return filterData(data, payload.search);
//   }

//   return filterData(
//     [...data].sort((a, b) => {
//       if (payload.reversed) {
//         return b[sortBy].localeCompare(a[sortBy]);
//       }

//       return a[sortBy].localeCompare(b[sortBy]);
//     }),
//     payload.search
//   );
// }

// const VehicleListTable = ({ search }) => {
//   const [sortedData, setSortedData] = useState([]);
//   const [sortBy, setSortBy] = useState(null);
//   const [reverseSortDirection, setReverseSortDirection] = useState(false);

//   useEffect(() => {
//     setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search }));
//   }, [sortBy, reverseSortDirection, search]);

//   const setSorting = (field) => {
//     const reversed = field === sortBy ? !reverseSortDirection : false;
//     setReverseSortDirection(reversed);
//     setSortBy(field);
//   };

//   const rows = sortedData.map((row) => (
//     <Table.Tr key={row.name}>
//       <Table.Td>{row.name}</Table.Td>
//       <Table.Td>{row.email}</Table.Td>
//       <Table.Td>{row.company}</Table.Td>
//     </Table.Tr>
//   ));

//   return (
//     <Paper>
//         <TextInput
//         placeholder="Search by any field"
//         mb="md"
//         style={{ width: "20%" }}
//         leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
//         value={search}
//         onChange={() => {}}
//       />

//       <ScrollArea>
//         <Table
//           horizontalSpacing="md"
//           verticalSpacing="xs"
//           miw={700}
//           layout="fixed"
//         >
//           <Table.Tbody>
//             <Table.Tr>
//               <Th
//                 sorted={sortBy === "name"}
//                 reversed={reverseSortDirection}
//                 onSort={() => setSorting("name")}
//               >
//                 Name
//               </Th>
//               <Th
//                 sorted={sortBy === "email"}
//                 reversed={reverseSortDirection}
//                 onSort={() => setSorting("email")}
//               >
//                 Email
//               </Th>
//               <Th
//                 sorted={sortBy === "company"}
//                 reversed={reverseSortDirection}
//                 onSort={() => setSorting("company")}
//               >
//                 Company
//               </Th>
//             </Table.Tr>
//           </Table.Tbody>
//           <Table.Tbody>
//             {rows.length > 0 ? (
//               rows
//             ) : (
//               <Table.Tr>
//                 <Table.Td colSpan={Object.keys(data[0]).length}>
//                   <Text fw={500} ta="center">
//                     Nothing found
//                   </Text>
//                 </Table.Td>
//               </Table.Tr>
//             )}
//           </Table.Tbody>
//         </Table>
//       </ScrollArea>
//     </Paper>
//   );
// };

// export default VehicleListTable;

// import serviceDueData from "./../../../data/DashboardServiceDueListData/DashboardServiceDueListData.json";

import React, { useState } from "react";
import {
  Table,
  ScrollArea,
  TextInput,
  Text,
  rem,
  Paper,
  Flex,
  Button,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import serviceDueData from "./../../../data/VehicleList-data/VehicleListData.json";
import { useNavigate } from "react-router-dom";
function TableSort() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filteredData = filterData(serviceDueData, search);
  const handleListClick = (vehicleno) => {
    navigate(`/main-page/BikesList/BikeListView?vehicleno=${vehicleno}`, {
      state: { vehicleno },
    });
  };
  const handleBackButton = () => {
    navigate(`/main-page/dashboard`);
  };
  const handleSearchChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const rows = filteredData.map((row, index) => (
    <Table.Tr key={index} onClick={() => handleListClick(row.vehicleno)}>
      <Table.Td>{row.ownerName}</Table.Td>
      <Table.Td>{row.vehicleno}</Table.Td>
      <Table.Td>{row.lastserviced}</Table.Td>
      <Table.Td>{row.address}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper bg="transparent" m="5px" mih="89vh">
      <Button ml="5px" mt="sm" bg="#182452" onClick={handleBackButton}>
        Back
      </Button>
      <Flex justify="space-between" m="md" pt="md">
        <Text size="24px">Vehicles due for service</Text>
        <TextInput
          placeholder="Search by any field"
          mb="md"
          w="20%"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={search}
          onChange={handleSearchChange}
        />
      </Flex>
      <ScrollArea p="sm" bg="#FFFFFF80">
        <Table
          striped
          highlightOnHover
          withTableBorder
          withColumnBorders
          horizontalSpacing="md"
          verticalSpacing="md"
          miw={700}
          layout="fixed"
        >
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Vehicle No.</Table.Th>
              <Table.Th>Last Serviced on:</Table.Th>
              <Table.Th>Address</Table.Th>
            </Table.Tr>
          </Table.Tbody>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={Object.keys(serviceDueData[0]).length}>
                  <Text fw={500} ta="center">
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}

function filterData(serviceDueData, search) {
  const query = search.toLowerCase().trim();
  console.log("Search Query:", query);
  const filtered = serviceDueData.filter((item) =>
    Object.values(item).some((value) => {
      const lowerCaseValue = String(value).toLowerCase();
      console.log("Current Value:", lowerCaseValue);
      return lowerCaseValue.includes(query);
    })
  );
  console.log("Filtered Data:", filtered);
  return filtered;
}

export default TableSort;
