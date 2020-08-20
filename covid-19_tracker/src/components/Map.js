import React from "react";
import { Map as MapContainer, TileLayer } from "react-leaflet";

//to use an API t create our map, we need to instal npm i react-leaflet
//also, there is a link provided by the developers to be set at the head of our html

function Map({ center, zoom }) {
  return (
    <div className="map_card">
      <MapContainer>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;
