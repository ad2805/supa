import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function SosGoogleMaps({ coordinates }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk',
        libraries: ['places'],
      });

  const [map, setMap] = React.useState(null);
  const [marker, setMarker] = React.useState(null);

  useEffect(() => {
    if (map && coordinates) {
      setMarker(createMarker(map, coordinates));
    }
  }, [map, coordinates]);

  const onLoad = React.useCallback(function callback(googleMap) {
    setMap(googleMap);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  function createMarker(googleMap, coords) {
    return new window.google.maps.Marker({
      map: googleMap,
      position: { lat: parseFloat(coords[0]), lng: parseFloat(coords[1]) },
      title: `Location - Lat: ${parseFloat(coords[0]).toFixed(4)}, Lng: ${parseFloat(coords[1]).toFixed(4)}`,
    });
  }

  const containerStyle = {
    width: '100%',
    height: '350px',
  };

  return (
    <div>
      <div id="map-containergoogle" className="map-containers" style={containerStyle}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1]) }}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SosGoogleMaps;
