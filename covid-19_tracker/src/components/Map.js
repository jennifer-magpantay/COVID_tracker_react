import React from "react";
import styled from "styled-components";
import { Map as MapContent, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";

//to use an API t create our map, we need to instal npm i react-leaflet
//also, there is a link provided by the developers to be set at the head of our html

const MapContainer = styled.div`
  height: 59vh;
  margin: 1%;
  background-color: var(--white);
  padding: 1%;
  border-radius: 4px;
  box-shadow: 0 0 6px -4px rgba(0, 0, 0, 0.8);

  .leaflet-container {
    height: 100%;
    border-radius: 4px;
  }

  @media (max-width: 800px){
   height: 59vh;
  }
`;

function Map({ countries, casesType, center, zoom }) {
  return (  
    <MapContainer>
      <MapContent center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContent>
    </MapContainer>   
  );
}

export default Map;
