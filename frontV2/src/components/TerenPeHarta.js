import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const TerenPeHarta = ({ teren }) => {
  // Parse the location into [lat, lng]
  const location = teren.location;

  return (
    <LoadScript key="AIzaSyBzCmCBDTzXa_R-LMuN0I-ih4mKmejQS34">
      <GoogleMap
        id="teren-map"
        mapContainerStyle={{
          width: '100%',
          height: '400px',
        }}
        zoom={15}
        center={{
          lat: location.coordinates[1],
          lng: location.coordinates[0],
        }}
      >
        <Marker
          position={{
            lat: location.coordinates[1],
            lng: location.coordinates[0],
          }}
         
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default TerenPeHarta;
