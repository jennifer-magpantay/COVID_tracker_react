import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

//set for each type of case to receive specific styke
const casesTypeColors = {  
  cases: {
    hex: "#2980b9",
    multiplier: 800,
  },
  recovered: {
    hex: "#bdc3c7",
    multiplier: 1200,
  },
  deaths: {
    hex: "#ef3629",
    multiplier: 2000,
  },
};

// create a variable/function to sort the data by descendent number of cases
  //first: set the variable to read all the data/array
export const sortData = (data) => {  
  const sortedData = [...data];
  //then, set the funciotn
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

//create a variable/function to format the number displyed inside the infoboxes
//it will take a number and replace for a 'string' - regex?
//override the numeral format for 0.0a = 1k = 12m
export const PrintStat = (stat) =>
stat ? `+${numeral(stat).format("0.0a")}` : "+0";
//then apply it to the context you want to format - our case, Main - Cases

//this function will spot circles on the map according to the number of cases - tooltips
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    //when read the data, for each country object, drawn a circle
    //those circles will be set with a bunch of style
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div>
          <div
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
            }}
          />
          <div><strong>{country.country}</strong></div>
          <div>Cases: {numeral(country.cases).format("0,0")}</div>
          <div>Recovered: {numeral(country.recovered).format("0,0")}</div>
          <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));

//   sortedData.sort((a, b) => {
//     if (a.cases > b.cases) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });
//   //then, retunr the function result
//   return sortedData;
//once is done, get back to the main and apply the function to the setDataTable();
