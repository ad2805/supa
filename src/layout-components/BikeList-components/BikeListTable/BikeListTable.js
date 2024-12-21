// VehicleListTable.jsx

// import React from "react";
// import { Table, ScrollArea, Text, Paper } from "@mantine/core";
// import VehicleListData from "./../../../data/VehicleList-data/VehicleListData.json";
// import { useNavigate } from "react-router-dom";

// const VehicleListTable = ({ search, fromDate, toDate }) => {
//   const navigate = useNavigate();
//   const handleListClick = () => {
//     navigate("/main-page/SearchBike"); // Navigating to the desired URL
//   };
//   const filteredData = VehicleListData.filter((item) => {
//     const query = search.toLowerCase().trim();
//     const registrationDate = new Date(item.vehicleRegistrationDate);

//     // Check if vehicle registration date falls within the specified range
//     const fromDateValid = !fromDate || registrationDate >= fromDate;
//     const toDateValid = !toDate || registrationDate <= toDate;

//     return (
//       fromDateValid &&
//       toDateValid &&
//       Object.values(item).some((value) => value.toLowerCase().includes(query))
//     );
//   });

//   const rows = filteredData.map((row, index) => (
//     <Table.Tr key={index}>
//       <Table.Td>{row.ownerName}</Table.Td>
//       <Table.Td>{row.vehicleno}</Table.Td>
//       <Table.Td>{row.chassisNumber}</Table.Td>
//       <Table.Td>{row.vehicleRegistrationDate}</Table.Td>
//       <Table.Td>{row.address}</Table.Td>
//     </Table.Tr>
//   ));

//   return (
//     <Paper onClick={handleListClick}>
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

// export default VehicleListTable;
// import React from "react";
// import { Table, ScrollArea, Text, Paper } from "@mantine/core";
// import VehicleListData from "./../../../data/VehicleList-data/VehicleListData.json";
// import { useNavigate } from "react-router-dom";

// const BikeListTable = ({ search, fromDate, toDate }) => {
//   const navigate = useNavigate();

//   const handleListClick = (vehicleno) => {
//     navigate(`/main-page/BikesList/BikeListView?vehicleno=${vehicleno}`, { state: { vehicleno } });
//   };

//   const filteredData = VehicleListData.filter((item) => {
//     const query = search.toLowerCase().trim();
//     const registrationDate = new Date(item.vehicleRegistrationDate);

//     // Check if vehicle registration date falls within the specified range
//     const fromDateValid = !fromDate || registrationDate >= fromDate;
//     const toDateValid = !toDate || registrationDate <= toDate;

//     // Check if any value is a string and includes the search query
//     return fromDateValid && toDateValid && Object.values(item).some((value) => {
//       if (typeof value === 'string') {
//         return value.toLowerCase().includes(query);
//       }
//       return false; // Ignore non-string values
//     });
//   });

//   const rows = filteredData.map((row, index) => (
//     <Table.Tr key={index} onClick={() => handleListClick(row.vehicleno)}>
//       <Table.Td>{row.ownerName}</Table.Td>
//       <Table.Td>{row.vehicleno}</Table.Td>
//       <Table.Td>{row.chassisNumber}</Table.Td>
//       <Table.Td>{row.registeredon}</Table.Td>
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

// export default BikeListTable;

import React from "react";
import { Table, ScrollArea, Text, Paper } from "@mantine/core";
import VehicleListData from "./../../../data/VehicleList-data/VehicleListData.json";
import { useNavigate } from "react-router-dom";

const BikeListTable = ({ search, fromDate, toDate }) => {
  const navigate = useNavigate();

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${month}/${day}/${year}`);
  };

  const handleListClick = (vehicleno) => {
    navigate(`/main-page/BikesList/BikeListView?vehicleno=${vehicleno}`, {
      state: { vehicleno },
    });
  };

  const filteredData = VehicleListData.filter((item) => {
    const query = search.toLowerCase().trim();

    // Parse fromDate to ensure consistency
    const fromDateParsed = fromDate ? new Date(fromDate.getTime()) : null;

    // Check if vehicle registration date falls within the specified range
    const registrationDate = parseDate(item.registeredon); // Parse the registration date from the data
    const fromDateValid = !fromDateParsed || registrationDate >= fromDateParsed;
    const toDateValid = !toDate || registrationDate <= toDate;

    // Check if any value is a string and includes the search query
    return (
      fromDateValid &&
      toDateValid &&
      Object.values(item).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        }
        return false; // Ignore non-string values
      })
    );
  });

  const rows = filteredData.map((row, index) => (
    <Table.Tr
      key={index}
      onClick={() => handleListClick(row.vehicleno)}
      style={{ cursor: "pointer" }}
    >
      <Table.Td>{row.ownerName}</Table.Td>
      <Table.Td>{row.vehicleno}</Table.Td>
      <Table.Td>{row.chassisNumber}</Table.Td>
      <Table.Td>{row.registeredon}</Table.Td>
      <Table.Td>{row.address}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper>
      <ScrollArea>
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
              <Table.Th>Owner Name</Table.Th>
              <Table.Th>Reg. Number</Table.Th>
              <Table.Th>Chassis Number</Table.Th>
              <Table.Th>Reg. Date</Table.Th>
              <Table.Th>Address</Table.Th>
            </Table.Tr>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={5}>
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
};

export default BikeListTable;
