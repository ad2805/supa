// import React, { useState, useEffect, useRef } from "react";
// import "./Bubble.css";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import { FullscreenControl } from "react-leaflet-fullscreen";
// import { Icon, divIcon, point } from "leaflet";
// import statesCoordinates from "../../../data/State-cordinates/statesCoordinates.json";
// import dataByState from "../../../data/bubble-map-data/bubblemapdata.json";

// const customIcon = new Icon({
//   iconUrl: require("./../../../assets/icons/bike.png"),
//   iconSize: [38, 38]
// });

// const customIconCategory2 = new Icon({
//   iconUrl: require("./../../../assets/icons/iconbike.png"), // Change the icon URL to the desired icon for category 2
//   iconSize: [38, 38]
// });

// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true)
//   });
// };
// const Bubble = ({ selectedState }) => {
//   const [category1Markers, setCategory1Markers] = useState([]);
//   const [category2Markers, setCategory2Markers] = useState([]);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Update the markers when the selected state changes
//     if (selectedState === "India") {
//       setCategory1Markers(dataByState.filter(marker => marker.category === 'category1'));
//       setCategory2Markers(dataByState.filter(marker => marker.category === 'category2'));
//     } else {
//       setCategory1Markers(dataByState.filter((marker) => marker.state === selectedState && marker.category === 'category1'));
//       setCategory2Markers(dataByState.filter((marker) => marker.state === selectedState && marker.category === 'category2'));
//     }
//   }, [selectedState]);

//   useEffect(() => {
//     // Update the map when the selected state changes
//     const defaultPosition = { center: [23.5120, 80.3290], zoom: 13 };
//     const { center, zoom } = statesCoordinates[selectedState] || defaultPosition;
//     if (mapRef.current) {
//       mapRef.current.setView(center, zoom);
//     }
//   }, [selectedState]);

//   return (
//     <div>
//       <MapContainer
//         center={statesCoordinates[selectedState]?.center || [20.5937, 78.9629]}
//         zoom={statesCoordinates[selectedState]?.zoom || 5}
//         ref={mapRef}
//         style={{ zIndex: 1, position: "relative", borderRadius: "5px" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
//           {category1Markers.map((marker, index) => (
//             <Marker key={index} position={[marker.latitude, marker.longitude]} icon={customIcon}>
//               <Popup>{marker.pop}</Popup>
//             </Marker>
//           ))}
//         </MarkerClusterGroup>

//         <MarkerClusterGroup chunkedLoading>
//           {category2Markers.map((marker, index) => (
//             <Marker key={index} position={[marker.latitude, marker.longitude]} icon={customIconCategory2}>
//               <Popup>{marker.pop}</Popup>
//             </Marker>
//           ))}
//         </MarkerClusterGroup>

//         <FullscreenControl position="topleft" />
//       </MapContainer>
//     </div>
//   );
// };

// export default Bubble;

import React, { useState, useEffect, useRef } from "react";
import "./Bubble.css";
import "leaflet/dist/leaflet.css";
import { Paper } from "@mantine/core";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { FullscreenControl } from "react-leaflet-fullscreen";
import { Icon, divIcon, point } from "leaflet";
import statesCoordinates from "../../../data/State-cordinates/statesCoordinates.json";
import bubbleMapData from "../../../data/bubble-map-data/bubblemapdata.json";
import IconLayer from "./../../../assets/icons/IconLayer.png";
import { Checkbox, Image, Menu, Text, Flex } from "@mantine/core";

const customIcon = new Icon({
  iconUrl: require("./../../../assets/icons/bike.png"),
  iconSize: [38, 38],
});

const customIconCategory2 = new Icon({
  iconUrl: require("./../../../assets/icons/IconService.png"), // Change the icon URL to the desired icon for category 2
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const Bubble = ({ selectedState }) => {
  const [showCategory1Markers, setShowCategory1Markers] = useState(true);
  const [showCategory2Markers, setShowCategory2Markers] = useState(true);
  const [category1Markers, setCategory1Markers] = useState([]);
  const [category2Markers, setCategory2Markers] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    // Update the markers when the selected state changes
    if (selectedState === "India") {
      setCategory1Markers(
        bubbleMapData
          .filter((marker) => marker.category === "Bike")
          .map((marker) => ({
            latitude: marker["co-ordinates"][0],
            longitude: marker["co-ordinates"][1],
            pop: marker.popup,
          }))
      );
      setCategory2Markers(
        bubbleMapData
          .filter((marker) => marker.category === "ServiceStation")
          .map((marker) => ({
            latitude: marker["co-ordinates"][0],
            longitude: marker["co-ordinates"][1],
            pop: marker.popup,
          }))
      );
    } else {
      setCategory1Markers(
        bubbleMapData
          .filter(
            (marker) =>
              marker.state === selectedState && marker.category === "Bike"
          )
          .map((marker) => ({
            latitude: marker["co-ordinates"][0],
            longitude: marker["co-ordinates"][1],
            pop: marker.popup,
          }))
      );
      setCategory2Markers(
        bubbleMapData
          .filter(
            (marker) =>
              marker.state === selectedState &&
              marker.category === "ServiceStation"
          )
          .map((marker) => ({
            latitude: marker["co-ordinates"][0],
            longitude: marker["co-ordinates"][1],
            pop: marker.popup,
          }))
      );
    }
  }, [selectedState]);

  useEffect(() => {
    // Update the map when the selected state changes
    const defaultPosition = { center: [23.512, 80.329], zoom: 13 };
    const { center, zoom } =
      statesCoordinates[selectedState] || defaultPosition;
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [selectedState]);

  const toggleCategory1Markers = () => {
    setShowCategory1Markers(!showCategory1Markers);
  };

  const toggleCategory2Markers = () => {
    setShowCategory2Markers(!showCategory2Markers);
  };

  return (
    <Paper >
      <MapContainer
        center={statesCoordinates[selectedState]?.center || [20.5937, 78.9629]}
        zoom={statesCoordinates[selectedState]?.zoom || 5}
        ref={mapRef}
        style={{
          zIndex: 1,
          position: "relative",
          borderRadius: "5px",
          height: "77vh",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {showCategory1Markers &&
            category1Markers.map((marker, index) => (
              <Marker
                key={index}
                position={[marker.latitude, marker.longitude]}
                icon={customIcon}
              >
                <Popup>{marker.pop}</Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>

        <MarkerClusterGroup chunkedLoading>
          {showCategory2Markers &&
            category2Markers.map((marker, index) => (
              <Marker
                key={index}
                position={[marker.latitude, marker.longitude]}
                icon={customIconCategory2}
              >
                <Popup>{marker.pop}</Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>

        <FullscreenControl position="topleft" />
        <Menu
          transitionProps={{ transition: "rotate-right", duration: 150 }}
          position="left-start"
          withArrow
          closeOnClickOutside={true}
        >
          <Menu.Target>
            <img
              src={IconLayer}
              style={{
                position: "absolute",
                top: "20px",
                left: "96%",
                zIndex: 1000, // Make sure the image stays on top of the map
                height: "35px",
              }}
            />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Flex gap="xs" onClick={toggleCategory1Markers}>
                <Checkbox
                  checked={showCategory1Markers}
                  onChange={toggleCategory1Markers}
                />
                <Text>Bikes</Text>
              </Flex>
            </Menu.Item>
            <Menu.Item onClick={toggleCategory2Markers}>
              <Flex gap="xs">
                <Checkbox
                  checked={showCategory2Markers}
                  onChange={toggleCategory2Markers}
                />
                <Text>Service Centres</Text>
              </Flex>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </MapContainer>
    </Paper>
  );
};

export default Bubble;
