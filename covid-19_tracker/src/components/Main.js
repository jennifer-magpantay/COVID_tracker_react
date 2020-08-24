import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import MainWrapper from "./MainWrapper";
import Logo from "../assets/images/logo_app.png";
import InfoBoxWrapper from './InfoBoxWrapper';
import InfoBox from "./InfoBox";
import Wrapper from "./Wrapper";
import Map from "./Map";
import AsideWrapper from "./AsideWrapper";
import Table from "./Table";
import Graph from "./Graph";
import { sortData, PrintStat } from "../util";
import numeral from 'numeral';

const LogoApp = styled.img`
  width: 160px;

  @media (max-width: 800px) {
    width: 120px;
  }
`;


//this is the main component of the app
//here are set the main content (header, infobox, map) and aside content (table, graphs)

// create a dropdowm menu using @material-ui
// to populate the options of the dropdown menu, lets add a state to read
// & write a variable and use it to generate oour options

function Main() {
  // const[variable, setVariable] = useState()
  const [countries, setCountries] = useState([]); //will set the countries that exist in the DB into an array
  const [country, setCountry] = useState("worldwide"); //will set the array of the countries inside the dropdown
  const [countryInfo, setCountryInfo] = useState({}); //will get the info about the a individual country
  const [tableData, setTableData] = useState([]);

  // useState for the map center & zoom props
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0});
  const [mapZoom, setMapZoom] = useState(1.5); //the value 3 gives enough zoom scale that would allows to see the entire map
  const [mapCountries, setMapCountries] = useState([]);
  // useEffect: runs a piece of code based on a given condition
  // useEffect(() => {},[]);

  //reading the countries
  //using the same function to set the tables
  useEffect(() => {
    // the code will run once when the component is loaded ans not again
    // async: send a request, wait for it and do something
    const getCountriesData = async () => {
      //add a endpoint to get request about all countries
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json()) //then sendo me a response in json
        .then((data) => {
          //then, get from the data ...
          const countries = data.map((country) => ({
            name: country.country, //'Brazil'
            value: country.countryInfo.iso2, //'BRA'
          }));

          //add here the util/sort function to set the tables
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  //setting the country infos to be used into the infoboxes - just worldwide option
  //this will be the default view/first option from the dropdown menu
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);            
      });
  }, []);

  //setting the country infos to be used into the infoboxes - options on select
  //this will listen the changes that are set on Select
  //everytime the country name changes, them, change the default value 'worldwide' for the clicked/selected country name
  //use onCountryChange to set events to request information according to the country clicked
  //then, update the infoboxes
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    //for that, add a if statemente: if the countrycode value 's worldwide, then, display/fetch all
    //if not, then fetch countries according to the country code value
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat,
          data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <Wrapper>
      <MainWrapper>
        <Wrapper>
          <LogoApp src={Logo} alt="Logo Covid-19 Tracker" />
          <FormControl className="header_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              {/* Worlwide is our first 'fixed' option */}
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* then, add map to read the countries from an array and print it inside our dropdown button */}
              {countries.map((country) => (
                // when read the array countries, set and return for every country a MenuItem, with the value and name = {country}
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Wrapper>

        {/* adding here the info boxes */}
        <InfoBoxWrapper>
        <h4>LIVE CASES&nbsp;&nbsp;|&nbsp;&nbsp;NUMBERS</h4>
        <p className="caption">Data sourced from Worldometers, updated every 10 minutes</p>
        <Wrapper>
          {/* pass the variable countryInfo into each infobox to display the figures about eh choosen country */}
          {/* to populate the boxes, get from API the cases registered today and the total */}
         
          <InfoBox
            title="New Cases"
            className="cases"
            cases={PrintStat(countryInfo.todayCases)} 
            total={numeral(countryInfo.cases).format(0,0)}
          />
          <InfoBox
            title="Recovered"
            className="recovered"
            cases={PrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format(0,0)}
                     />
          <InfoBox
            title="Deaths"
            className="deaths"
            cases={PrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format(0,0)}
          />
        </Wrapper>
        </InfoBoxWrapper>
        <Map 
        countries={mapCountries}
        center={mapCenter} zoom={mapZoom} />
      </MainWrapper>

      {/* adding the aside content here */}
      <AsideWrapper>
        <Table countries={tableData} />
        <Graph />
      </AsideWrapper>
    </Wrapper>
  );
}

export default Main;
