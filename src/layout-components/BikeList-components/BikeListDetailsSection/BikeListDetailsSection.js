// import { Paper , Text ,Flex} from "@mantine/core";
// import React from "react";

// export default function SearchBikeDetailsSection() {
//   return (
//     <Flex direction="column" gap="xl">
// <Flex gap="md">
//   <Text size="24px">Owner Name:</Text>
//   <Text size="22px" c="#00000080">Suarabh Gupta</Text>
// </Flex>
// <Flex gap="md">
//   <Text size="24px">Vehicle Number:</Text>
//   <Text size="22px" c="#00000080"> KA 13 ES 7666</Text>
// </Flex >
// <Flex gap="md">
//   <Text size="24px">Last Service:</Text>
//   <Text size="22px" c="#00000080">12/10/2023</Text>
// </Flex>
// <Flex gap="md">
//   <Text size="24px">Premium Purchased:</Text>
//   <Text size="22px" c="#00000080">14/9/2023 (14 days left )</Text>
// </Flex>
// <Flex gap="md">
//   <Text size="24px">Geofence Created on:</Text>
//   <Text size="22px" c="#00000080">7/1/2024</Text>
// </Flex>
// <Flex gap="md">
//   <Text size="24px">Battery Condition:</Text>
//   <Text size="22px" c="#00000080">Statisfactory</Text>
// </Flex>
// <Flex gap="md">
//   <Text size="24px">Registeration:</Text>
//   <Text size="22px" c="#00000080">07/05/2021</Text>
// </Flex>
//     </Flex>
//   );
// }

// SearchBikeDetailsSection.js
// import React from "react";
// import { Flex, Text } from "@mantine/core";

// export default function SearchBikeDetailsSection({ vehicle }) {
//   return (
//     <Flex direction="column" gap="xl">
//       {vehicle && (
//         <>
//           <Flex gap="md">
//             <Text size="24px">Owner Name:</Text>
//             <Text size="22px" c="#00000080">
//              {vehicle.username}
//             </Text>
//           </Flex>
//           <Flex gap="md">
//             <Text size="24px">Vehicle Number:</Text>
//             <Text size="22px" c="#00000080">
//               {" "}
//               {vehicle.vehicleno}
//             </Text>
//           </Flex>
//           <Flex gap="md">
//             <Text size="24px">Last Service:</Text>
//             <Text size="22px" c="#00000080">
//               {vehicle.lastserviced}
//             </Text>
//           </Flex>
//           <Flex gap="md">
//             <Text size="24px">Premium Purchased:</Text>
//             <Text size="22px" c="#00000080">
//               {vehicle.premiumpurchased}
//             </Text>
//           </Flex>
//           <Flex gap="md">
//             <Text size="24px">Geofence Created on:</Text>
//             <Text size="22px" c="#00000080">
//               {vehicle.geofencecreated}
//             </Text>
//           </Flex>
//           <Flex gap="md">
//             <Text size="24px">Battery Condition:</Text>
//             <Text size="22px" c="#00000080">
//               {vehicle.Battery}
//             </Text>
//           </Flex>
//           <Flex gap="md">
//             <Text size="24px">Registeration:</Text>
//             <Text size="22px" c="#00000080">
//               {vehicle.registeredon}
//             </Text>
//           </Flex>
//         </>
//       )}
//     </Flex>
//   );
// }

// import React from "react";
// import { Flex, Text } from "@mantine/core";

// export default function BikeListDetailsSection({ vehicle }) {
//   return (
//     <Flex direction="column" gap="xl">
//       <Flex gap="md">
//         <Text size="24px">Owner Name:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.ownerName ) : "------"}
//         </Text>
//       </Flex>
//       <Flex gap="md">
//         <Text size="24px">Vehicle Number:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.vehicleno ) : "------"}
//         </Text>
//       </Flex>
//       <Flex gap="md">
//         <Text size="24px">Last Service:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.lastserviced ) : "------"}
//         </Text>
//       </Flex>
//       <Flex gap="md">
//         <Text size="24px">Premium Purchased:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.premiumpurchased ) : "------"}
//         </Text>
//       </Flex>
//       <Flex gap="md">
//         <Text size="24px">Geofence Created on:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.geofencecreated ) : "------"}
//         </Text>
//       </Flex>
//       <Flex gap="md">
//         <Text size="24px">Battery Condition:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.Battery ) : "------"}
//         </Text>
//       </Flex>
//       <Flex gap="md">
//         <Text size="24px">Registeration:</Text>
//         <Text size="22px" c="#00000080">
//           {vehicle ? (vehicle.registeredon ) : "------"}
//         </Text>
//       </Flex>
//     </Flex>
//   );
// }
import { Table } from "@mantine/core";

export default function Demo({ vehicle }) {
  return (
    <Table
      withColumnBorders
      striped
      highlightOnHover
      withTableBorder
      // horizontalSpacing="md"
      verticalSpacing="sm"
    >
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Owner Name</Table.Td>
          <Table.Td>{vehicle ? vehicle.ownerName : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Vehicle Number</Table.Td>
          <Table.Td>{vehicle ? vehicle.vehicleno : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Chassis Number</Table.Td>
          <Table.Td>{vehicle ? vehicle.chassisNumber : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Contact Number</Table.Td>
          <Table.Td>{vehicle ? vehicle.contactNo : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Registration Date</Table.Td>
          <Table.Td>{vehicle ? vehicle.registeredon : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Last Service</Table.Td>
          <Table.Td>{vehicle ? vehicle.lastserviced : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Mail</Table.Td>
          <Table.Td>{vehicle ? vehicle.mail : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Premium Purchased</Table.Td>
          <Table.Td>{vehicle ? vehicle.premiumpurchased : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Geofence Created on</Table.Td>
          <Table.Td>{vehicle ? vehicle.geofencecreated : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Battery Condition</Table.Td>
          <Table.Td>{vehicle ? vehicle.Battery : "------"}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
