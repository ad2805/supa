// import React from "react";
// import SearchBikeToPSection from "./../../layout-components/SearchBike-components/SeachBikeTopsection/SearchBikeToPSection";
// import { Paper, Text, Group, Box, Flex } from "@mantine/core";
// import SearchBikeDetailsSection from "./../../layout-components/SearchBike-components/SearchBikeDetailsSection/SearchBikeDetailsSection";
// import SearchBikeMap from "../../layout-components/SearchBike-components/SeachBikeMap/SeachBikeMap";
// import SearchBikeSearchBox from "./../../layout-components/SearchBike-components/SearchBikeSearchBox/SearchBikeSearchBox"
// import SearchBikeData from "./../../data/SearchBikeData/SearchBikeData.json"
// export default function SearchBike() {
//   return (
//     <Paper m="5px" bg="transparent"  mih="88vh" mt="20px">
//       <Flex justify="space-between" m="md">
//       <Text size="24px" m="sm">Search Bike</Text>
//       <SearchBikeSearchBox/>
//       </Flex>
//       <Paper bg="#FFFFFF80" mt="25px" mih="80vh">
//         <Group m="5px" p="md">
//           <SearchBikeToPSection />
//         </Group>
//         <Group m="5px" p="md" w="100%">
//           <Flex w="100%" gap="md">
//             <Box w="40%" p="md" bg="#EBEBEB">
//               <Flex direction="column" gap="md">
//                 <Text size="28px">Details</Text>
//                 <Box p="md" bg="#FFFFFF">
//                   <SearchBikeDetailsSection />
//                 </Box>
//               </Flex>
//             </Box>
//             <Box w="60%" p="md" bg="#EBEBEB" mr="5px">
//               <Flex direction="column" gap="md">
//                 <Text size="28px">Map</Text>
//                 <SearchBikeMap />
//               </Flex>
//             </Box>
//           </Flex>
//         </Group>
//       </Paper>
//     </Paper>
//   );
// }

// import React, { useState } from "react";
// import SearchBikeToPSection from "./../../layout-components/SearchBike-components/SeachBikeTopsection/SearchBikeToPSection";
// import { Paper, Text, Group, Box, Flex } from "@mantine/core";
// import SearchBikeDetailsSection from "./../../layout-components/SearchBike-components/SearchBikeDetailsSection/SearchBikeDetailsSection";
// import SearchBikeMap from "../../layout-components/SearchBike-components/SeachBikeMap/SeachBikeMap";
// import SearchBikeSearchBox from "./../../layout-components/SearchBike-components/SearchBikeSearchBox/SearchBikeSearchBox";
// import SearchBikeData from "./../../data/SearchBikeData/SearchBikeData.json";

// import "./SearchBike.css";
// import SearchBikeImageViewer from "../../layout-components/SearchBike-components/SearchBikeImageViewer/SearchBikeImageViewer";

// export default function SearchBike() {
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   const handleSearch = (vehicleNo) => {
//     // Trim leading and trailing whitespaces
//     const trimmedVehicleNo = vehicleNo.trim().toUpperCase(); // Convert to uppercase for case-insensitive search

//     const foundVehicle = SearchBikeData.find(
//       (vehicle) => vehicle.vehicleno.toUpperCase() === trimmedVehicleNo
//     );

//     // console.log("Found Vehicle:", foundVehicle);
//     setSelectedVehicle(foundVehicle);
//   };

//   return (
//     <Paper m="5px" bg="transparent" mih="88.5vh" mt="20px">
//       <Flex justify="space-between" m="md">
//         <Text size="24px" m="sm">
//           Search Bike
//         </Text>
//         <SearchBikeSearchBox onSearch={handleSearch} />
//       </Flex>
//       <Paper bg="#FFFFFF80" >
//         <Group m="5px" p="md">
//           <SearchBikeToPSection vehicle={selectedVehicle} />
//         </Group>
//         <Group m="5px" p="md" w="100%">
//           <Flex w="100%" gap="md" className="detailMapSearch">
//             <Box w="40%" p="md" bg="#EBEBEB" className="detailSeacrhBike">
//               <Flex direction="column" gap="md">
//                 <Text size="28px">Details</Text>
//                 <Box p="md" bg="#FFFFFF">
//                   <SearchBikeDetailsSection vehicle={selectedVehicle} />
//                 </Box>
//               </Flex>
//             </Box>
//             <Box
//               w="60%"
//               p="md"
//               bg="#EBEBEB"
//               mr="5px"
//               className="detailSeacrhBike"
//             >
//               <Flex direction="column" gap="md">
//                 <Text size="28px">Map</Text>
//                 <SearchBikeMap
//                   key={selectedVehicle ? selectedVehicle.vehicleno : "default"}
//                   vehicle={selectedVehicle}
//                 />
//               </Flex>
//             </Box>
//           </Flex>
//         </Group>
//         <Group m="5px" p="md" mt="-10px">
//           <Box
//             w="40%"
//             p="md"
//             bg="#EBEBEB"
//             mr="5px"
//             className="detailSeacrhBike"
//             mih="28vh"
//           >
//             <Flex direction="column" gap="md">
//               <Text size="28px">Documents</Text>
//               <SearchBikeImageViewer vehicle={selectedVehicle} />
//             </Flex>
//           </Box>
//         </Group>
//       </Paper>
//     </Paper>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import SearchBikeData from "./../../../data/VehicleList-data/VehicleListData.json";
// import { Paper, Text, Group, Box, Flex, Button, Switch } from "@mantine/core";
// import BikeListTopsection from "./../../BikeList-components/BikeListTopsection/BikeListTopsection";
// import BikeListDetailsSection from "../BikeListDetailsSection/BikeListDetailsSection";
// import BikeListMap from "./../BikeListMap/BikeListMap";
// import BikeListImageViewer from "../BikeListImageViewer/BikeListImageViewer";
// import "./BikeListView.css";

// export default function BikeListView() {
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const vehicleno = queryParams.get("vehicleno");
//     if (vehicleno) {
//       handleSearch(vehicleno);
//     }
//   }, [location]);
//   const handleBackButton = () => {
//     navigate("/main-page/BikesList");
//   };
//   const handleSearch = (vehicleNo) => {
//     const trimmedVehicleNo = vehicleNo.trim().toUpperCase();

//     const foundVehicle = SearchBikeData.find(
//       (vehicle) => vehicle.vehicleno.toUpperCase() === trimmedVehicleNo
//     );

//     setSelectedVehicle(foundVehicle);
//   };

//   return (
//     <Paper m="5px" bg="transparent" mih="88.5vh" mt="20px">
//       <Flex justify="space-between" mr="xl" align="center">
//         <Button ml="5px" bg="#182452" onClick={handleBackButton}>
//           Back
//         </Button>
//         <Switch
//           defaultChecked
//           color="#182452"
//           label="Disable vehicle's connection"
//           size="lg"
//         />
//       </Flex>
//       <Paper bg="#FFFFFF80" mt="sm">
//         <Group m="5px" p="md">
//           <BikeListTopsection vehicle={selectedVehicle} />
//         </Group>
//         <Group m="5px" p="md" w="100%">
//           <Flex w="100%" gap="md" className="detailMapSearch">
//             <Box w="40%" p="md" bg="#EBEBEB" className="detailSeacrhBike">
//               <Flex direction="column" gap="md">
//                 <Text size="28px">Details</Text>
//                 <Box bg="#FFFFFF">
//                   <BikeListDetailsSection vehicle={selectedVehicle} />
//                 </Box>
//               </Flex>
//             </Box>
//             <Box
//               w="60%"
//               p="md"
//               bg="#EBEBEB"
//               mr="5px"
//               className="detailSeacrhBike"
//             >
//               <Flex direction="column" gap="md">
//                 <Text size="28px">Map</Text>
//                 <BikeListMap
//                   key={selectedVehicle ? selectedVehicle.vehicleno : "default"}
//                   vehicle={selectedVehicle}
//                 />
//               </Flex>
//             </Box>
//           </Flex>
//         </Group>
//         <Group m="5px" p="md" mt="-10px">
//           <Box
//             w="40%"
//             p="md"
//             bg="#EBEBEB"
//             mr="5px"
//             className="detailSeacrhBike"
//             mih="28vh"
//           >
//             <Flex direction="column" gap="md">
//               <Text size="28px">Documents</Text>
//               <BikeListImageViewer vehicle={selectedVehicle} />
//             </Flex>
//           </Box>
//         </Group>
//       </Paper>
//     </Paper>
//   );
// }

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBikeData from "./../../../data/VehicleList-data/VehicleListData.json";
import { Paper, Text, Group, Box, Flex, Button, Switch } from "@mantine/core";
import BikeListTopsection from "./../../BikeList-components/BikeListTopsection/BikeListTopsection";
import BikeListDetailsSection from "../BikeListDetailsSection/BikeListDetailsSection";
import BikeListMap from "./../BikeListMap/BikeListMap";
import BikeListImageViewer from "../BikeListImageViewer/BikeListImageViewer";
import "./BikeListView.css";
import DailyUsage from "../DailyUsage/DailyUsage";
import DailyUsageSelect from "../DailyUsageSelect/DailyUsageSelect";

export default function BikeListView() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Kilometers");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vehicleno = queryParams.get("vehicleno");
    if (vehicleno) {
      handleSearch(vehicleno);
    }
  }, [location]);

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleSearch = (vehicleNo) => {
    const trimmedVehicleNo = vehicleNo.trim().toUpperCase();
    const foundVehicle = SearchBikeData.find(
      (vehicle) => vehicle.vehicleno.toUpperCase() === trimmedVehicleNo
    );
    setSelectedVehicle(foundVehicle);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Paper m="5px" bg="transparent" mih="88.5vh" mt="20px">
      <Flex justify="space-between" align="center">
        <Button ml="5px" bg="#182452" onClick={handleBackButton}>
          Back
        </Button>
        <Flex align="center" gap="sm" mr="lg">
          <Text size="20px">Disable vehicle's connection</Text>
          <Switch defaultChecked color="#182452" size="lg" />
        </Flex>
      </Flex>
      <Paper bg="#FFFFFF80" mt="sm">
        <Group m="5px" p="md">
          <BikeListTopsection vehicle={selectedVehicle} />
        </Group>
        <Group m="5px" p="md" w="100%">
          <Flex w="100%" gap="md" className="detailMapSearch">
            <Box w="40%" p="md" bg="#EBEBEB" className="detailSeacrhBike">
              <Flex direction="column" gap="md">
                <Text size="28px">Details</Text>
                <Box bg="#FFFFFF">
                  <BikeListDetailsSection vehicle={selectedVehicle} />
                </Box>
              </Flex>
            </Box>
            <Box
              w="60%"
              p="md"
              bg="#EBEBEB"
              mr="5px"
              className="detailSeacrhBike"
            >
              <Flex direction="column" gap="md">
                <Text size="28px">Map</Text>
                <BikeListMap
                  key={selectedVehicle ? selectedVehicle.vehicleno : "default"}
                  geofence={selectedVehicle ? selectedVehicle.geofence : []}
                  location={selectedVehicle ? selectedVehicle.location : []}
                />
              </Flex>
            </Box>
          </Flex>
        </Group>

        <Group m="5px" p="md" mt="-10px">
          <Flex gap="md" w="100%" className="detailMapSearch">
            <Box
              w="40%"
              p="md"
              bg="#EBEBEB"
              mr="5px"
              className="detailSeacrhBike"
              mih="28vh"
            >
              <Flex direction="column" gap="md">
                <Text size="28px">Documents</Text>
                <BikeListImageViewer vehicle={selectedVehicle} />
              </Flex>
            </Box>
            {selectedVehicle && selectedVehicle.dailyUsage ? (
              <Box
                w="60%"
                p="md"
                bg="#EBEBEB"
                className="detailSeacrhBike"
                // h="400px"
                // style={{ position: "relative" }}
              >
                <Flex direction="column">
                  <Flex direction="row" justify="space-between" align="center">
                    <Text size="28px">Daily Travelled</Text>
                    <DailyUsageSelect
                      selectedOption={selectedOption}
                      handleOptionChange={handleOptionChange}
                    />
                  </Flex>
                  <DailyUsage
                    vehicle={selectedVehicle}
                    selectedOption={selectedOption}
                  />
                </Flex>
              </Box>
            ) : (
              <Text>No data available for daily usage</Text>
            )}
          </Flex>
        </Group>
      </Paper>
    </Paper>
  );
}
