import React from "react";
import MapView, { Callout } from "react-native-maps";
import CustomCalloutView from "./CustomCalloutView";

export default function ListMarker({ listMarker, handlePickImage }) {
  return (
    <>
      {listMarker.map((marker, index) => (
        <MapView.Marker key={index} coordinate={marker.coordinate}>
          <Callout>
            <CustomCalloutView
              index={index}
              image={marker.image}
              handlePickImage={handlePickImage}
            />
          </Callout>
        </MapView.Marker>
      ))}
    </>
  );
}
