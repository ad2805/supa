// import React from "react";
// import { TileLayer, MapContainer } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { FullscreenControl } from "react-leaflet-fullscreen";
// import "leaflet/dist/leaflet.css";
// import heatmapData from "./../../../data//heat-map-data/heatmapData.json";

// export default function DashboardHeatMap() {
//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 50,
//   };

//   return (
//     <div className="heatmap-container" style={{ height: "500px" }}>
    
//         <MapContainer
//           center={[20.5937, 78.9629]}
//           zoom={4}
//           className="map-container"
//           style={{ height: "100%", zIndex: 1 }} 
//         >
//           <HeatmapLayer
//             points={heatmapData.map((point) => [
//               parseFloat(point.latitude),
//               parseFloat(point.longitude),
//               parseFloat(point.intensity),
//             ])}
//             longitudeExtractor={(point) => point[1]}
//             latitudeExtractor={(point) => point[0]}
//             intensityExtractor={(point) => parseFloat(point[2])}
//             {...heatmapOptions}
//           />
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <FullscreenControl position="topleft" />
//         </MapContainer>
//     </div>
//   );
// }



// // DashboardHeatMap.js




// // DashboardHeatMap.js
// import React, { useState, useEffect } from "react";
// import { TileLayer, MapContainer } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { FullscreenControl } from "react-leaflet-fullscreen";
// import stateCenters from "./../../../data/State-cordinates/statesCoordinates";
// import modelData from "./../../../data/heat-map-data/DashboardHeatmapData.json";

// // ... (import statements)

// const DashboardHeatMap = ({ selectedRegion, selectedModel, onModelChange }) => {
//   const defaultLatitude = 20;
//   const defaultLongitude = 77;
//   const defaultZoomLevel = 4;

//   const initialRegion = stateCenters[selectedRegion] ? selectedRegion : "DefaultRegion";
//   const [mapCenter, setMapCenter] = useState(stateCenters[initialRegion]?.center || [defaultLatitude, defaultLongitude]);
//   const [mapZoom, setMapZoom] = useState(stateCenters[initialRegion]?.zoom || defaultZoomLevel);
//   const [mapKey, setMapKey] = useState(0);

//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 50,
//   };

//   const models = {
//     "Adventure": [
//       { "latitude": 11.9716, "longitude": 77.5146, "intensity": 10, "state": "Karnataka" },
//     { "latitude": 16.9716, "longitude": 77.1145, "intensity": 5, "state": "Karnataka" },
//     { "latitude": 27.0238, "longitude": 74.2179, "intensity": 8, "state": "Rajasthan" }
//       // ... (other data points for Adventure model)
//     ],
//     "GT": [
//       { "latitude": 11.9726, "longitude": 77.5946, "intensity": 18, "state": "Karnataka" },
//     { "latitude": 16.9156, "longitude": 77.1115, "intensity": 12, "state": "Karnataka" },
//     { "latitude": 27.0238, "longitude": 74.2179, "intensity": 14, "state": "Rajasthan" }

//       // ... (other data points for GT model)
//     ]
//     // Add more models if needed
//   };

//   useEffect(() => {
//     if (stateCenters[selectedRegion]) {
//       setMapCenter(stateCenters[selectedRegion].center);
//       setMapZoom(stateCenters[selectedRegion].zoom);
//       setMapKey((prevKey) => prevKey + 1);
//     } else {
//       setMapCenter([defaultLatitude, defaultLongitude]);
//       setMapZoom(defaultZoomLevel);
//       console.warn(`Using default values for region: ${selectedRegion}`);
//     }
//   }, [selectedRegion, stateCenters]);

//   const getHeatmapData = () => {
//     const modelData = models[selectedModel] || [];
//     if (selectedRegion === "India") {
//       return modelData.map((point) => [
//         parseFloat(point.latitude),
//         parseFloat(point.longitude),
//         parseFloat(point.intensity),
//       ]);
//     } else {
//       const stateData = modelData.filter(
//         (point) => point.state === selectedRegion
//       );
//       return stateData.map((point) => [
//         parseFloat(point.latitude),
//         parseFloat(point.longitude),
//         parseFloat(point.intensity),
//       ]);
//     }
//   };

//   const handleModelChange = (event) => {
//     const newModel = event.target.value;
//     onModelChange(newModel);
//   };

//   return (
//     <div className="heatmap-container" style={{ height: "500px" }}>
//       {/* Model Selection Dropdown */}
//       <select value={selectedModel} onChange={handleModelChange}>
//         <option value="Adventure">Adventure</option>
//         <option value="GT">GT</option>
//       </select>

//       {/* Map Container */}
//       <MapContainer
//         key={mapKey}
//         center={mapCenter}
//         zoom={mapZoom}
//         className="map-container"
//         style={{ zIndex: 1 }}
//       >
//         {/* Heatmap Layer */}
//         <HeatmapLayer
//           points={getHeatmapData()}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2])}
//           {...heatmapOptions}
//         />

//         {/* Tile Layer */}
//         <TileLayer
//           attribution={false}
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Fullscreen Control */}
//         <FullscreenControl position="topleft" />
//       </MapContainer>
//     </div>
//   );
// };

// export default DashboardHeatMap;



// import React, { useState, useEffect } from "react";
// import { TileLayer, MapContainer } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { FullscreenControl } from "react-leaflet-fullscreen";
// import stateCenters from "./../../../data/State-cordinates/statesCoordinates";
// import modelData from "./../../../data/heat-map-data/DashboardHeatmapData.json";

// // ... (import statements)

// const DashboardHeatMap = ({ selectedRegion, selectedModel, onModelChange }) => {
//   const defaultLatitude = 20;
//   const defaultLongitude = 77;
//   const defaultZoomLevel = 4;

//   const initialRegion = stateCenters[selectedRegion] ? selectedRegion : "DefaultRegion";
//   const [mapCenter, setMapCenter] = useState(stateCenters[initialRegion]?.center || [defaultLatitude, defaultLongitude]);
//   const [mapZoom, setMapZoom] = useState(stateCenters[initialRegion]?.zoom || defaultZoomLevel);
//   const [mapKey, setMapKey] = useState(0);

//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 50,
//   };

//   useEffect(() => {
//     if (stateCenters[selectedRegion]) {
//       setMapCenter(stateCenters[selectedRegion].center);
//       setMapZoom(stateCenters[selectedRegion].zoom);
//       setMapKey((prevKey) => prevKey + 1);
//     } else {
//       setMapCenter([defaultLatitude, defaultLongitude]);
//       setMapZoom(defaultZoomLevel);
//       console.warn(`Using default values for region: ${selectedRegion}`);
//     }
//   }, [selectedRegion, stateCenters]);

//   const getHeatmapData = () => {
//     const selectedModelData = modelData[selectedModel] || [];

//     if (selectedRegion === "India" && selectedModel === "All Models") {
//       // Return data for all models and all states
//       return Object.values(modelData).flat().map((point) => [
//         parseFloat(point.latitude),
//         parseFloat(point.longitude),
//         parseFloat(point.intensity),
//       ]);
//     } else {
//       // Return data based on the selected model and region
//       return selectedModelData
//         .filter((point) => point.state === selectedRegion)
//         .map((point) => [
//           parseFloat(point.latitude),
//           parseFloat(point.longitude),
//           parseFloat(point.intensity),
//         ]);
//     }
//   };

//   return (
//     <div className="heatmap-container" style={{ height: "500px" }}>
//       {/* Map Container */}
//       <MapContainer
//         key={mapKey}
//         center={mapCenter}
//         zoom={mapZoom}
//         className="map-container"
//         style={{ zIndex: 1 }}
//       >
//         {/* Heatmap Layer */}
//         <HeatmapLayer
//           points={getHeatmapData()}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2])}
//           {...heatmapOptions}
//         />

//         {/* Tile Layer */}
//         <TileLayer
//           attribution={false}
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Fullscreen Control */}
//         <FullscreenControl position="topleft" />
//       </MapContainer>
//     </div>
//   );
// };

// export default DashboardHeatMap;




// import React, { useState, useEffect } from "react";
// import { TileLayer, MapContainer } from "react-leaflet";
// import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
// import { FullscreenControl } from "react-leaflet-fullscreen";
// import heatmapData from "./../../../data/heat-map-data/DashboardHeatmapData.json";
// import stateCenters from "./../../../data/State-cordinates/statesCoordinates.json";

// const DashboardHeatMap = ({ selectedRegion  ,  selectedModel }) => {
//   const defaultLatitude = 20; // Your default latitude
//   const defaultLongitude = 77; // Your default longitude
//   const defaultZoomLevel = 4; // Your default zoom level

//   const initialRegion = stateCenters[selectedRegion] ? selectedRegion : "India";
//   const [mapCenter, setMapCenter] = useState(stateCenters[initialRegion]?.center || [defaultLatitude, defaultLongitude]);
//   const [mapZoom, setMapZoom] = useState(stateCenters[initialRegion]?.zoom || defaultZoomLevel);
//   const [mapKey, setMapKey] = useState(0);

//   const heatmapOptions = {
//     radius: 20,
//     blur: 20,
//     maxZoom: 18,
//     minOpacity: 0.5,
//     maxOpacity: 50,
//   };

//   useEffect(() => {
//     if (stateCenters[selectedRegion]) {
//       setMapCenter(stateCenters[selectedRegion].center);
//       setMapZoom(stateCenters[selectedRegion].zoom);
//       setMapKey((prevKey) => prevKey + 1);
//     } else {
//       // Provide default values or handle the case appropriately
//       setMapCenter([defaultLatitude, defaultLongitude]);
//       setMapZoom(defaultZoomLevel);
//       console.warn(`Using default values for region: ${selectedRegion}`);
//     }
//   }, [selectedRegion, stateCenters]);

//   const getHeatmapData = () => {
//     if (selectedRegion === "India") {
//       return heatmapData.map((point) => [
//         parseFloat(point.latitude),
//         parseFloat(point.longitude),
//         parseFloat(point.intensity),
//       ]);
//     } else {
//       const stateData = heatmapData.filter(
//         (point) => point.state === selectedRegion
//       );

//       console.log(`Data for ${selectedRegion}:`, stateData);

//       return stateData.map((point) => [
//         parseFloat(point.latitude),
//         parseFloat(point.longitude),
//         parseFloat(point.intensity),
//       ]);
//     }
//   };

//   return (
//     <div className="heatmap-container" style={{ height: "490px" }}>
//       <MapContainer
//         key={mapKey}
//         center={mapCenter}
//         zoom={mapZoom}
//         className="map-container"
//         style={{ zIndex: 1 }}
//       >
//         <HeatmapLayer
//           points={getHeatmapData()}
//           longitudeExtractor={(point) => point[1]}
//           latitudeExtractor={(point) => point[0]}
//           intensityExtractor={(point) => parseFloat(point[2])}
//           {...heatmapOptions}
//         />
//         <TileLayer
//           attribution={false}
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <FullscreenControl position="topleft" />
//       </MapContainer>
//     </div>
//   );
// };

// export default DashboardHeatMap;
import React, { useState, useEffect } from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { FullscreenControl } from "react-leaflet-fullscreen";
import heatmapData from "./../../../data/heat-map-data/DashboardHeatmapData.json";
import stateCenters from "./../../../data/State-cordinates/statesCoordinates.json";

const DashboardHeatMap = ({ selectedRegion, selectedModel }) => {
  const defaultLatitude = 20; // Your default latitude
  const defaultLongitude = 77; // Your default longitude
  const defaultZoomLevel = 4; // Your default zoom level

  const initialRegion = stateCenters[selectedRegion] ? selectedRegion : "India";
  const [mapCenter, setMapCenter] = useState(
    stateCenters[initialRegion]?.center || [defaultLatitude, defaultLongitude]
  );
  const [mapZoom, setMapZoom] = useState(
    stateCenters[initialRegion]?.zoom || defaultZoomLevel
  );
  const [mapKey, setMapKey] = useState(0);

  const heatmapOptions = {
    radius: 20,
    blur: 20,
    maxZoom: 18,
    minOpacity: 0.5,
    maxOpacity: 50,
  };

  useEffect(() => {
    if (stateCenters[selectedRegion]) {
      setMapCenter(stateCenters[selectedRegion].center);
      setMapZoom(stateCenters[selectedRegion].zoom);
      setMapKey((prevKey) => prevKey + 1);
    } else {
      // Provide default values or handle the case appropriately
      setMapCenter([defaultLatitude, defaultLongitude]);
      setMapZoom(defaultZoomLevel);
      console.warn(`Using default values for region: ${selectedRegion}`);
    }
  }, [selectedRegion, stateCenters]);

  const getHeatmapData = () => {
    let filteredData = heatmapData;

    if (selectedRegion !== "India") {
      filteredData = heatmapData.filter(
        (point) => point.state === selectedRegion && point.model === selectedModel
      );
    }

    return filteredData.map((point) => [
      parseFloat(point.latitude),
      parseFloat(point.longitude),
      parseFloat(point.intensity),
    ]);
  };

  return (
    <div >
      <MapContainer
        key={mapKey}
        center={mapCenter}
        zoom={mapZoom}
        // className="map-container"
        style={{ zIndex: 1 , height: "490px", borderRadius:"5px"}}
      >
        <HeatmapLayer
          points={getHeatmapData()}
          longitudeExtractor={(point) => point[1]}
          latitudeExtractor={(point) => point[0]}
          intensityExtractor={(point) => parseFloat(point[2])}
          {...heatmapOptions}
        />
        <TileLayer
          attribution={false}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenControl position="topleft" />
      </MapContainer>
    </div>
  );
};

export default DashboardHeatMap;
