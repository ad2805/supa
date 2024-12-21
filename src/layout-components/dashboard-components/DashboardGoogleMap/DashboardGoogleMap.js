import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "205px",
};

const center = {
  lat: 21.1458,
  lng: 79.0882,
};

const locations = [
  { lat: 21.1458, lng: 79.0882, name: "Location 1" },
  // { lat: 13.009711, lng: 76.102898, name: 'Location 2' },
  // { lat: 34.083656, lng: 74.797371, name: 'Location 3' },
  // { lat: 26.083656, lng: 86.797371, name: 'Location 4' },
  // Add more locations as needed
];

export default function DashboardGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk",
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (map) {
      createLocationMarkers(map);
    }
  }, [map]);

  const onLoad = React.useCallback(function callback(googleMap) {
    const bounds = new window.google.maps.LatLngBounds(center);
    googleMap.fitBounds(bounds);
    setMap(googleMap);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  function createLocationMarkers(googleMap) {
    locations.forEach((location) => {
      // Create a marker for each location
      const marker = new window.google.maps.Marker({
        map: googleMap,
        position: { lat: location.lat, lng: location.lng },
        title: location.name,
      });

      // Create an info window for each marker
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div><strong>${
          location.name
        }</strong><br>Lat: ${location.lat.toFixed(
          4
        )}<br>Lng: ${location.lng.toFixed(4)}</div>`,
      });

      // Add a click event listener to open the info window when the marker is clicked
      marker.addListener("click", () => {
        infoWindow.open(googleMap, marker);
      });
    });
  }

  const mapOptions = {
    streetViewControl: false,
  }

  return (
    <div style={{ width: "100%" }}>
      <div
        // id="map-containergoogle"
        // className="map-container"
        style={containerStyle}
        ref={mapContainer}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            className="google-maps"
            zoom={17}
            options={mapOptions}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        ) : null}
      </div>
    </div>
  );
}

