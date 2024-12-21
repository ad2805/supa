// import { Divider, RingProgress } from "@mantine/core";
// import "./Ring.css";

// export default function Ring() {
//   const ringSize = 100; // Set the desired size here

//   return (
//     <div>
//       <div className="ring-container">
//         <RingProgress
//           size={ringSize}
//           label={
//             <div style={{ textAlign: "center", fontSize: "18px" }}>
//               {" "}
//               {/* Apply textAlign directly using style prop */}
//               65%
//             </div>
//           }
//           sections={[{ value: 65, color: "#578357" }]}
//         />
//         <Divider size="xl" orientation="vertical" color="#578357" m="sm" />
//         <div className="ring-description">
//           <p id="desc-1">Good</p>
//           <p id="desc-2">75000 vehicles</p>
//         </div>
//       </div>

//       <div className="ring-container">
//         <RingProgress
//           size={ringSize}
//           label={
//             <div  style={{ textAlign: "center" , fontSize: "18px"}}>
//               {" "}
//               {/* Apply textAlign directly using style prop */}
//               27%
//             </div>
//           }
//           sections={[{ value: 27, color: "#E0B92C" }]}
//         />
//         <Divider size="xl" orientation="vertical" color="#E0B92C" m="sm" />
//         <div className="ring-description">
//           <p id="desc-3">Satisfactory</p>
//           <p id="desc-2">21000 vehicles</p>
//         </div>
//       </div>

//       <div className="ring-container">
//         <RingProgress
//           size={ringSize}
//           label={
//             <div style={{ textAlign: "center" , fontSize: "18px"}}>
//               {" "}
//               {/* Apply textAlign directly using style prop */}
//               8%
//             </div>
//           }
//           sections={[{ value: 8, color: "#9E3535" }]}
//         />
//         <Divider size="xl" orientation="vertical" color="#9E3535" m="sm" />
//         <div className="ring-description">
//           <p id="desc-5">Critical</p>
//           <p id="desc-2">6000 vehicles</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { Divider, RingProgress } from "@mantine/core";
// import "./Ring.css";
// import batteryData from "./../../data/ReportsBatteryHealthData/ReportsBatteryHealthData.json";

// export default function Ring() {
//   const ringSize = 100; // Set the desired size here
//   const { good, satisfactory, critical } = batteryData;

  // return (
  //   <div>
  //     <div className="ring-container">
  //       <RingProgress
  //         size={ringSize}
  //         label={
  //           <div style={{ textAlign: "center", fontSize: "18px" }}>
  //             {good.value}%
  //           </div>
  //         }
  //         sections={[{ value: good.value, color: "#578357" }]}
  //       />
  //       <Divider size="xl" orientation="vertical" color="#578357" m="sm" />
  //       <div className="ring-description">
  //         <p id="desc-1">Good</p>
  //         <p id="desc-2">{good.vehicles} vehicles</p>
  //       </div>
  //     </div>

  //     <div className="ring-container">
  //       <RingProgress
  //         size={ringSize}
  //         label={
  //           <div style={{ textAlign: "center", fontSize: "18px" }}>
  //             {satisfactory.value}%
  //           </div>
  //         }
  //         sections={[{ value: satisfactory.value, color: "#E0B92C" }]}
  //       />
  //       <Divider size="xl" orientation="vertical" color="#E0B92C" m="sm" />
  //       <div className="ring-description">
  //         <p id="desc-3">Satisfactory</p>
  //         <p id="desc-2">{satisfactory.vehicles} vehicles</p>
  //       </div>
  //     </div>

  //     <div className="ring-container">
  //       <RingProgress
  //         size={ringSize}
  //         label={
  //           <div style={{ textAlign: "center", fontSize: "18px" }}>
  //             {critical.value}%
  //           </div>
  //         }
  //         sections={[{ value: critical.value, color: "#9E3535" }]}
  //       />
  //       <Divider size="xl" orientation="vertical" color="#9E3535" m="sm" />
  //       <div className="ring-description">
  //         <p id="desc-5">Critical</p>
  //         <p id="desc-2">{critical.vehicles} vehicles</p>
  //       </div>
  //     </div>
  //   </div>
  // );
// }


// Ring.js

import React from "react";
import { Divider, RingProgress } from "@mantine/core";
import "./Ring.css";

const Ring = ({ regionData, selectedModel }) => {
  const ringSize = 100; // Set the desired size here
  const { good, satisfactory, critical } = regionData;

  return (
    <div>
      <div className="ring-container">
        <RingProgress
          size={ringSize}
          label={
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              {good.value}%
            </div>
          }
          sections={[{ value: good.value, color: "#578357" }]}
        />
        <Divider size="xl" orientation="vertical" color="#578357" m="sm" />
        <div className="ring-description">
          <p id="desc-1">Good</p>
          <p id="desc-2">{good.vehicles} Vehicles</p>
        </div>
      </div>

      <div className="ring-container">
        <RingProgress
          size={ringSize}
          label={
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              {satisfactory.value}%
            </div>
          }
          sections={[{ value: satisfactory.value, color: "#E0B92C" }]}
        />
        <Divider size="xl" orientation="vertical" color="#E0B92C" m="sm" />
        <div className="ring-description">
          <p id="desc-3">Satisfactory</p>
          <p id="desc-2">{satisfactory.vehicles} Vehicles</p>
        </div>
      </div>

      <div className="ring-container">
        <RingProgress
          size={ringSize}
          label={
            <div style={{ textAlign: "center", fontSize: "18px" }}>
              {critical.value}%
            </div>
          }
          sections={[{ value: critical.value, color: "#9E3535" }]}
        />
        <Divider size="xl" orientation="vertical" color="#9E3535" m="sm" />
        <div className="ring-description">
          <p id="desc-5">Critical</p>
          <p id="desc-2">{critical.vehicles} Vehicles</p>
        </div>
      </div>
    </div>
  );
};

export default Ring;
