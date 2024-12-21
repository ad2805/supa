




// import React from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import {HeatmapLayer} from 'react-leaflet-heatmap-layer-v3';

// const Heatmap = () => {
//   // Sample temperature data from vehicles
//   const temperatureData = [
//     [37.7749, -122.4194, 25], // San Francisco
//     [34.0522, -118.2437, 30], // Los Angeles
//     [40.7128, -74.0060, 22],  // New York
//     [41.8781, -87.6298, 28],  // Chicago
//     [29.7604, -95.3698, 18],  // Houston
//     [33.4484, -112.0740, 32], // Phoenix
//     [39.7392, -104.9903, 26], // Denver
//     [37.7749, -122.4194, 29], // San Francisco (again)
//     [32.7767, -96.7970, 21],  // Dallas
//     [25.7617, -80.1918, 31],  // Miami
//     [45.5051, -122.6750, 24],
//   ];

//   // Define the variables
//   const latitude = 37.7749; // Initial latitude
//   const longitude = -122.4194; // Initial longitude
//   const zoomLevel = 10; // Initial zoom level

//   // Define the color gradient based on temperature values
//   const gradient = {
//     0.1: 'blue',
//     0.2: 'cyan',
//     0.4: 'green',
//     0.6: 'yellow',
//     0.8: 'orange',
//     1.0: 'red',
//   };

//   return (
//     <MapContainer center={[latitude, longitude]} zoom={zoomLevel}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
//       />
//       <HeatmapLayer
//         points={temperatureData}
//         longitudeExtractor={(point) => point[1]}
//         latitudeExtractor={(point) => point[0]}
//         intensityExtractor={(point) => point[2]}
//         gradient={gradient}
//       />
//     </MapContainer>
//   );
// };

// export default Heatmap;




import React, { useState, useEffect } from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "leaflet/dist/leaflet.css";
import "./Heatmap.css";
import heatmapData from "./../../../data/heat-map-data/heatmapData.json";
import stateCenters from "./../../../data/State-cordinates/statesCoordinates.json";

const Heat = ({ selectedState }) => {
  const [mapCenter, setMapCenter] = useState(stateCenters.India.center);
  const [mapZoom, setMapZoom] = useState(stateCenters.India.zoom);
  const [mapKey, setMapKey] = useState(0);

  const heatmapOptions = {
    radius: 20,
    blur: 20,
    maxZoom: 18,
    minOpacity: 0.5,
    maxOpacity: 50,
  };

  useEffect(() => {
    // Update the map center and zoom when the selected option changes
    setMapCenter(stateCenters[selectedState].center);
    setMapZoom(stateCenters[selectedState].zoom);
    // Update the map key to force remount
    setMapKey((prevKey) => prevKey + 1);
  }, [selectedState]);

  const getHeatmapData = () => {
    if (selectedState === "India") {
      return heatmapData.map((point) => [
        parseFloat(point.latitude),
        parseFloat(point.longitude),
        parseFloat(point.intensity),
      ]);
    } else {
      const stateData = heatmapData.filter(
        (point) => point.state === selectedState
      );

      console.log(`Data for ${selectedState}:`, stateData);

      return stateData.map((point) => [
        parseFloat(point.latitude),
        parseFloat(point.longitude),
        parseFloat(point.intensity),
      ]);
    }
  };

  return (
    <div className="heatmap-container">
      <MapContainer
        key={mapKey}
        center={mapCenter}
        zoom={mapZoom}   
        className="map-container"
        style={{ zIndex: 1, borderRadius: "5px" }}
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

export default Heat;
