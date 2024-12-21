// import { Paper, Slider, Box, Text, Flex, Divider } from "@mantine/core";
// import React from "react";
// import DistanceProgressBar from "./../../../layout-components/Insights-components/Prediction-components/DistanceProgressBar/DistanceProgressBar";
// import DaysProgresBar from "./../../../layout-components/Insights-components/Prediction-components/DaysProgressBar/DaysProgressBar";
// export default function Predictions() {
//   const marks = [
//     { value: 0, label: "70%" },
//     { value: 20, label: "75%" },
//     { value: 40, label: "85%" },
//     { value: 60, label: "90%" },
//     { value: 80, label: "95%" },
//     { value: 100, label: "100%" },
//   ];
//   return (
//     <Paper bg="transparent" m="5px" pt="lg">
//       <Text size="24px" pl="lg" pb="md" pt="xs">
//         Predictions
//       </Text>
//       <Paper m="5px" bg="#FFFFFF80" pt="md">
//         <Paper w="50%" m="md" bg="#EBEBEB" p="md">
//           <Text size="24px">Distance Prediction</Text>
//           <Paper bg="#FFFFFF" mt="sm">
//             <Box pt="xs">
//               <Text mx="sm" c="#00000080">
//                 Select the Battery Health
//               </Text>
//               <Slider
//                 color="#47A1E2"
//                 defaultValue={0}
//                 thumbSize={21}
//                 label={(val) => marks.find((mark) => mark.value === val)?.label}
//                 step={20}
//                 marks={marks}
//                 size="xl"
//                 radius="lg"
//                 mx="xl"
//               />
//             </Box>
//             <Flex mt="xl" pb="md" justify="space-evenly">
//               <Box w="45%">
//                 <DistanceProgressBar />
//               </Box>
//               <Divider size="md" c="red" orientation="vertical" />
//               <Box w="45%">
//                 <DaysProgresBar />
//               </Box>
//             </Flex>
//           </Paper>
//         </Paper>
//       </Paper>
//     </Paper>
//   );
// }

import { Paper, Slider, Box, Text, Flex, Divider } from "@mantine/core";
import React, { useState } from "react";
import DistanceProgressBar from "./../../../layout-components/Insights-components/Prediction-components/DistanceProgressBar/DistanceProgressBar";
import DaysProgresBar from "./../../../layout-components/Insights-components/Prediction-components/DaysProgressBar/DaysProgressBar";
import ServicePrediction from "../../../layout-components/Insights-components/Prediction-components/ServicePrediction/ServicePrediction";
import "./Predictions.css";
export default function Predictions() {
  const [batteryHealth, setBatteryHealth] = useState(100); // State to store slider value

  const marks = [
    { value: 0, label: "70%" },
    { value: 20, label: "75%" },
    { value: 40, label: "85%" },
    { value: 60, label: "90%" },
    { value: 80, label: "95%" },
    { value: 100, label: "100%" },
  ];

  const handleSliderChange = (newValue) => {
    setBatteryHealth(newValue);
  };

  return (
    <Paper bg="transparent" m="5px" pt="lg" mih="90vh">
      <Text size="24px" pl="lg" pb="md" pt="xs">
        Predictions
      </Text>
      <Paper m="5px" bg="#FFFFFF80" pt="md" pb="xs">
        <Flex className="PredictionFlex">
          <Paper w="50%" m="md" bg="#EBEBEB" p="md" className="InsightsBox">
            <Text size="24px" pl="xs">
              Battery Health to Distance
            </Text>
            <Paper bg="#FFFFFF" mt="sm">
              <Box pt="xs">
                <Text mx="sm" c="#00000080">
                  Select the Battery Health
                </Text>
                <Slider
                  color="#47A1E2"
                  value={batteryHealth}
                  onChange={handleSliderChange}
                  thumbSize={21}
                  label={(val) =>
                    marks.find((mark) => mark.value === val)?.label
                  }
                  step={20}
                  marks={marks}
                  size="xl"
                  radius="lg"
                  mx="xl"
                />
              </Box>
              <Flex
                mt="xl"
                pb="md"
                justify="space-evenly"
                className="InsightsFlex"
              >
                <Box w="50%"  className="InsightsBox">
                  <DistanceProgressBar batteryHealth={batteryHealth} />
                </Box>
                <Divider size="md" orientation="vertical" my="xl" />
                <Box w="50%"  className="InsightsBox">
                  <DaysProgresBar batteryHealth={batteryHealth} />
                </Box>
              </Flex>
            </Paper>
          </Paper>
          <Paper w="50%" m="md" bg="#EBEBEB" p="md" className="InsightsBox">
            <Text size="24px" pl="xs">
              Service Prediction
            </Text>
            <Paper bg="#FFFFFF" mt="sm">
              <ServicePrediction />
            </Paper>
          </Paper>
        </Flex>
      </Paper>
    </Paper>
  );
}
