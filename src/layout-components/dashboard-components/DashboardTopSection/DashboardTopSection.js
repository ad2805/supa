// // import { Flex, Group, Image, Text } from "@mantine/core";
// // import React from "react";
// // import bikeIcon from "../../../assets/icons/iconbike.png";
// // import milageIcon from "./../../../assets/icons/Milage.svg";
// // import speedIcon  from "./../../../assets/icons/Speed.svg";
// // import bluetoothIcon  from "./../../../assets/icons/Bluetooth.svg"

// // const topSectionData = [
// //   {
// //     title: "Number of Bikes",
// //     value: 75000,
// //     color: "#9C68C5",
// //     image: bikeIcon,
// //   },
// //   {
// //     title: "Average Range",
// //     value: "80 Km",
// //     color: "#489CDA",
// //     image: milageIcon,
// //   },
// //   {
// //     title: "Average Speed",
// //     value: "60 Km/hr",
// //     color: "#71B6B2",
// //     image: speedIcon,
// //   },
// //   {
// //     title: "Avg Bluetooth Users",
// //     value: "50%",
// //     color: "#E0B92C",
// //     image: bluetoothIcon,
// //   },
// // ];

// // export default function DashboardTopSection() {
// //   const topSectionCard = topSectionData.map((data) => {
// //     return (
// //       <Group
// //         key={data.title}
// //         bg="#FFFFFF"
// //         justify="space-evenly"
// //         px="md"
// //         py="xl"
// //         style={{
// //           borderRadius: "10px",
// //         }}
// //         w="350px"
// //       >
// //         <Image src={data.image} />
// //         <Flex direction="column" align="center">
// //           <Text size="sm">{data.title}</Text>
// //           <Text c={data.color} size='md'>{data.value}</Text>
// //         </Flex>
// //       </Group>
// //     );
// //   });
// //   return (
// //     <Flex w="100%" justify="space-between" mb="lg">
// //       {topSectionCard}
// //     </Flex>
// //   );
// // }

// // DashboardTopSection.js

// import { Flex, Group, Image, Text } from "@mantine/core";
// import React from "react";
// import bikeIcon from "../../../assets/icons/iconbike.png";
// import milageIcon from "./../../../assets/icons/Milage.svg";
// import speedIcon from "./../../../assets/icons/Speed.svg";
// import bluetoothIcon from "./../../../assets/icons/Bluetooth.svg";

// const DashboardTopSection = ({ selectedRegion }) => {
//   // Assuming fetchData(region) fetches data for the specified region
//   const fetchData = (region) => {
//     // Simulate fetching data based on the region
//     // You should replace this with your actual data fetching logic
//     switch (region) {
//       case "India":
//         return {
//           bikes: 75000,
//           range: "80 Km",
//           speed: "60 Km/hr",
//           bluetooth: "50%",
//         };
//       case "AndhraPradesh":
//         return {
//           bikes: 5000,
//           range: "56 Km",
//           speed: "67 Km/hr",
//           bluetooth: "55%",
//         };
//       case "ArunachalPradesh":
//         return {
//           bikes: 7000,
//           range: "80 Km",
//           speed: "70 Km/hr",
//           bluetooth: "80%",
//         };
//       default:
//         return {
//           bikes: "",
//           range: "",
//           speed: "",
//           bluetooth: "",
//         };
//     }
//   };

//   // Fetch data based on the selected region
//   const regionData = fetchData(selectedRegion);

//   // Update topSectionData with the fetched data
//   const topSectionData = [
//     {
//       title: "Number of Bikes",
//       value: regionData.bikes,
//       color: "#9C68C5",
//       image: bikeIcon,
//     },
//     {
//       title: "Average Range",
//       value: regionData.range,
//       color: "#489CDA",
//       image: milageIcon,
//     },
//     {
//       title: "Average Speed",
//       value: regionData.speed,
//       color: "#71B6B2",
//       image: speedIcon,
//     },
//     {
//       title: "Avg Bluetooth Users",
//       value: regionData.bluetooth,
//       color: "#E0B92C",
//       image: bluetoothIcon,
//     },
//   ];

//   const topSectionCard = topSectionData.map((data) => {
//     return (
//       <Group
//         key={data.title}
//         bg="#FFFFFF"
//         justify="space-evenly"
//         px="md"
//         py="xl"
//         style={{
//           borderRadius: "10px",
//         }}
//         w="350px"
//       >
//         <Image src={data.image} />
//         <Flex direction="column" align="center">
//           <Text size="sm">{data.title}</Text>
//           <Text c={data.color} size="md">
//             {data.value}
//           </Text>
//         </Flex>
//       </Group>
//     );
//   });

//   return (
//     <Flex w="100%" justify="space-between" mb="lg">
//       {topSectionCard}
//     </Flex>
//   );
// };

// export default DashboardTopSection;

// DashboardTopSection.js
// import React from 'react';
// import { Flex, Group, Image, Text } from "@mantine/core";
// import bikeIcon from "../../../assets/icons/iconbike.png";
// import milageIcon from "./../../../assets/icons/Milage.svg";
// import speedIcon from "./../../../assets/icons/Speed.svg";
// import bluetoothIcon from "./../../../assets/icons/Bluetooth.svg";
// import data from "./../../../data/DashboardTopSectionData/DashboardTopSectionData.json";

// const DashboardTopSection = ({ selectedRegion , selectedModel }) => {
//   const fetchData = (region, model) => {
//     // Access the data from the imported JSON file
//     return data[model][region];
//   };

//   const regionData = fetchData(selectedRegion, selectedModel);

//   if (!regionData) {
//     return <div>No Data for this state</div>;
//   }

//   const topSectionData = [
//     {
//       title: "Number of Bikes",
//       value: regionData.bikes,
//       color: "#9C68C5",
//       image: bikeIcon,
//     },
//     {
//       title: "Average Range",
//       value: regionData.range,
//       color: "#489CDA",
//       image: milageIcon,
//     },
//     {
//       title: "Average Speed",
//       value: regionData.speed,
//       color: "#71B6B2",
//       image: speedIcon,
//     },
//     {
//       title: "Avg Bluetooth Users",
//       value: regionData.bluetooth,
//       color: "#E0B92C",
//       image: bluetoothIcon,
//     },
//   ];

//   const topSectionCard = topSectionData.map((data) => {
//     return (
//       <Group
//         key={data.title}
//         bg="#FFFFFF"
//         justify="space-evenly"
//         px="md"
//         py="xl"
//         style={{
//           borderRadius: "10px",
//         }}
//         w="350px"
//       >
//         <Image src={data.image} />
//         <Flex direction="column" align="center">
//           <Text size="sm">{data.title}</Text>
//           <Text c={data.color} size="md">
//             {data.value}
//           </Text>
//         </Flex>
//       </Group>
//     );
//   });

//   return (
//     <Flex w="100%" justify="space-between" mb="lg">
//       {topSectionCard}
//     </Flex>
//   );
// };

// export default DashboardTopSection;

// DashboardTopSection.js
import { Flex, Group, Image, Text, Box } from "@mantine/core";
import React from "react";
import bikeIcon from "../../../assets/icons/iconbike.png";
import milageIcon from "./../../../assets/icons/Milage.svg";
import speedIcon from "./../../../assets/icons/Speed.svg";
import bluetoothIcon from "./../../../assets/icons/Bluetooth.svg";
import regionDataJson from "./../../../data/DashboardTopSectionData/DashboardTopSectionData.json";
import "./DashboardTopSection.css";

const DashboardTopSection = ({ selectedRegion, selectedModel }) => {
  // Filter data based on the selected region
  const filteredRegionData = regionDataJson.find(
    (data) => data.Region === selectedRegion
  ) || {
    Region: selectedRegion,
    Models: [],
  };

  // Filter data based on the selected model
  const selectedModelData = filteredRegionData.Models.find(
    (modelData) => modelData.Model === selectedModel
  ) || {
    Model: selectedModel,
    bikes: "0000",
    range: "--",
    speed: "--",
    bluetooth: "--",
  };

  const topSectionData = [
    {
      title: "Number of Bikes",
      value: selectedModelData.bikes,
      color: "#9C68C5",
      image: bikeIcon,
    },
    {
      title: "Average Range",
      value: selectedModelData.range,
      color: "#489CDA",
      image: milageIcon,
    },
    {
      title: "Average Speed",
      value: selectedModelData.speed,
      color: "#71B6B2",
      image: speedIcon,
    },
    {
      title: "Average BT Users",
      value: selectedModelData.bluetooth,
      color: "#E0B92C",
      image: bluetoothIcon,
    },
  ];

  const topSectionCard = topSectionData.map((data, index) => {
    return (
      <Group
        key={index}
        bg="#FFFFFF"
        justify="space-between"
        display="flex"
        px="md"
        py="xl"
        style={{
          borderRadius: "5px",
        }}
        w="100%"
      >
        <Box w="18%" align="center">
          <Image src={data.image} />
        </Box>
        <Box w="70%">
          <Flex direction="column" align="center">
            <Text style={{ fontSize: "20px" }} className="topsectionTitle">
              {data.title}
            </Text>
            <Text
              c={data.color}
              style={{ fontSize: "22px" }}
              className="topsectionValue"
            >
              {data.value}
            </Text>
          </Flex>
        </Box>
      </Group>
    );
  });

  return (
    <Flex className="topsection" w="100%" justify="space-between" gap="20px">
      {topSectionCard}
    </Flex>
  );
};

export default DashboardTopSection;
