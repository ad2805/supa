

// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup ,Polygon } from "react-leaflet";
// import L from "leaflet";
// import { FullscreenControl } from "react-leaflet-fullscreen";

// function BikeListMap({ vehicle }) {
//   const defaultCenter = [21.910803, 77.901184];
//   const defaultZoom = [4];

//   const polygonCoords = vehicle ? vehicle.geofence :[];

//   const customIcon = L.icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//     popupAnchor: [0, -40],
//   });

//   const position = vehicle ? vehicle.location : defaultCenter;

//   const zoom = vehicle ? [14] : defaultZoom;
//   return (
//     <div style={{ position: "relative", zIndex: 1 }}> {/* Ensuring the map container stays below the modal */}
//       <MapContainer
//         center={position}
//         zoom={zoom}
//         style={{ zIndex: 0, height: "467px", width: "100%", position: "relative", borderRadius:"5px"}} // Position relative added
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {vehicle && (
//           <Marker position={position} icon={customIcon}>
//             <Popup>{vehicle.username}</Popup>
//           </Marker>
//         )}
//         <Polygon pathOptions={{ color: "#182452" }} positions={polygonCoords} />
//         <FullscreenControl position="topleft" />
//       </MapContainer>
//     </div>
//   );
// }

// export default BikeListMap;


// import React, { useEffect, useRef } from 'react';

// function GoogleMapWithPolygon() {
//   const mapContainerRef = useRef(null);
//   const infoContainerRef = useRef(null);
//   let map;
//   let coordinates = [];

//   useEffect(() => {
//     const initMap = () => {
//       if (!window.google || !window.google.maps || !window.google.maps.drawing) {
//         console.error("Google Maps API or Drawing Library is not loaded.");
//         return;
//       }

//       const location = new window.google.maps.LatLng(28.620585, 77.228609);
//       const mapOptions = {
//         zoom: 12,
//         center: location,
//         mapTypeId: window.google.maps.MapTypeId.RoadMap
//       };
//       map = new window.google.maps.Map(mapContainerRef.current, mapOptions);

//       const drawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingControlOptions: {
//           position: window.google.maps.ControlPosition.TOP_CENTER,
//           drawingModes: [
//             window.google.maps.drawing.OverlayType.POLYGON
//           ]
//         },
//         polygonOptions: {
//           clickable: true,
//           draggable: false,
//           editable: true,
//           fillColor: '#ADFF2F',
//           fillOpacity: 0.5,
//         }
//       });

//       drawingManager.setMap(map);

//       window.google.maps.event.addListener(drawingManager, 'polygoncomplete', (event) => {
//         coordinates = [];
//         const len = event.getPath().getLength();
//         for (let i = 0; i < len; i++) {
//           coordinates.push(event.getPath().getAt(i).toUrlValue(6));
//         }
//         infoContainerRef.current.innerHTML = coordinates.join(', ');
//       });
//     };

//     if (!window.google || !window.google.maps || !window.google.maps.drawing) {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk&libraries=drawing`;
//       script.async = true;
//       script.onload = initMap;
//       document.head.appendChild(script);
//     } else {
//       initMap();
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Google Maps Draw Polygon Get Coordinates</h2>
//       <div ref={mapContainerRef} style={{ height: '400px', width: '700px' }}></div>
//       <h4>Updated Coordinates (X,Y)</h4>
//       <div ref={infoContainerRef} style={{ position: 'absolute', color: 'red', fontFamily: 'Arial', height: '200px', fontSize: '12px' }}></div>
//     </div>
//   );
// }

// export default GoogleMapWithPolygon;







// import { useEffect, useRef } from "react";
// import { useJsApiLoader } from "@react-google-maps/api";
// import { Paper } from "@mantine/core";

// function BikeListMap({ geofence, location }) {
//   const mapRef = useRef(null);

//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk",
//     id: "google-map-script",
//     libraries: ["places"],
//   });

//   useEffect(() => {
//     if (!isLoaded || !location) return;

//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat: location[0], lng: location[1] },
//       zoom: 12,
//     });

//     if (geofence && geofence.length > 0) {
//       const polygon = new window.google.maps.Polygon({
//         paths: geofence.map(coord => ({ lat: coord[0], lng: coord[1] })),
//         strokeColor: "#182452",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#abd4f8",
//         fillOpacity: 0.35,
//       });

//       polygon.setMap(map);
//     }

//     const marker = new window.google.maps.Marker({
//       position: { lat: location[0], lng: location[1] },
//       map: map,
//       title: "Your Location",
//     });
//   }, [isLoaded, geofence, location]);

//   if (loadError) return <div>Error loading maps</div>;

//   return (
//     <Paper className="App">
//       <div style={{ width: "100%", height: "465px" }} ref={mapRef}></div>
//     </Paper>
//   );
// }

// export default BikeListMap;




// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup ,Polygon } from "react-leaflet";
// import L from "leaflet";
// import { FullscreenControl } from "react-leaflet-fullscreen";

// function BikeListMap({ vehicle }) {
//   const defaultCenter = [21.910803, 77.901184];
//   const defaultZoom = [4];

//   const polygonCoords = vehicle ? vehicle.geofence :[];

//   const customIcon = L.icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//     popupAnchor: [0, -40],
//   });

//   const position = vehicle ? vehicle.location : defaultCenter;

//   const zoom = vehicle ? [14] : defaultZoom;
//   return (
//     <div style={{ position: "relative", zIndex: 1 }}> {/* Ensuring the map container stays below the modal */}
//       <MapContainer
//         center={position}
//         zoom={zoom}
//         style={{ zIndex: 0, height: "467px", width: "100%", position: "relative", borderRadius:"5px"}} // Position relative added
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {vehicle && (
//           <Marker position={position} icon={customIcon}>
//             <Popup>{vehicle.username}</Popup>
//           </Marker>
//         )}
//         <Polygon pathOptions={{ color: "#182452" }} positions={polygonCoords} />
//         <FullscreenControl position="topleft" />
//       </MapContainer>
//     </div>
//   );
// }

// export default BikeListMap;


// import React, { useEffect, useRef } from 'react';

// function GoogleMapWithPolygon() {
//   const mapContainerRef = useRef(null);
//   const infoContainerRef = useRef(null);
//   let map;
//   let coordinates = [];

//   useEffect(() => {
//     const initMap = () => {
//       if (!window.google || !window.google.maps || !window.google.maps.drawing) {
//         console.error("Google Maps API or Drawing Library is not loaded.");
//         return;
//       }

//       const location = new window.google.maps.LatLng(28.620585, 77.228609);
//       const mapOptions = {
//         zoom: 12,
//         center: location,
//         mapTypeId: window.google.maps.MapTypeId.RoadMap
//       };
//       map = new window.google.maps.Map(mapContainerRef.current, mapOptions);

//       const drawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingControlOptions: {
//           position: window.google.maps.ControlPosition.TOP_CENTER,
//           drawingModes: [
//             window.google.maps.drawing.OverlayType.POLYGON
//           ]
//         },
//         polygonOptions: {
//           clickable: true,
//           draggable: false,
//           editable: true,
//           fillColor: '#ADFF2F',
//           fillOpacity: 0.5,
//         }
//       });

//       drawingManager.setMap(map);

//       window.google.maps.event.addListener(drawingManager, 'polygoncomplete', (event) => {
//         coordinates = [];
//         const len = event.getPath().getLength();
//         for (let i = 0; i < len; i++) {
//           coordinates.push(event.getPath().getAt(i).toUrlValue(6));
//         }
//         infoContainerRef.current.innerHTML = coordinates.join(', ');
//       });
//     };

//     if (!window.google || !window.google.maps || !window.google.maps.drawing) {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk&libraries=drawing`;
//       script.async = true;
//       script.onload = initMap;
//       document.head.appendChild(script);
//     } else {
//       initMap();
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Google Maps Draw Polygon Get Coordinates</h2>
//       <div ref={mapContainerRef} style={{ height: '400px', width: '700px' }}></div>
//       <h4>Updated Coordinates (X,Y)</h4>
//       <div ref={infoContainerRef} style={{ position: 'absolute', color: 'red', fontFamily: 'Arial', height: '200px', fontSize: '12px' }}></div>
//     </div>
//   );
// }

// export default GoogleMapWithPolygon;







import React, { useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Paper } from "@mantine/core";

function BikeListMap({ geofence, location }) {
  const mapRef = useRef(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk",
    id: "google-map-script",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !location) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: location[0], lng: location[1] },
      zoom: 12,
    });

    if (geofence && geofence.length > 0) {
      const polygon = new window.google.maps.Polygon({
        paths: geofence.map(coord => ({ lat: coord[0], lng: coord[1] })),
        strokeColor: "#182452",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#abd4f8",
        fillOpacity: 0.35,
      });

      polygon.setMap(map);
    }

    const marker = new window.google.maps.Marker({
      position: { lat: location[0], lng: location[1] },
      map: map,
      title: "Your Location",
    });
  }, [isLoaded, geofence, location]);

  if (loadError) return <div>Error loading maps</div>;

  return (
    <Paper className="App">
      <div style={{ width: "100%", height: "465px" }} ref={mapRef}></div>
    </Paper>
  );
}

export default BikeListMap;
