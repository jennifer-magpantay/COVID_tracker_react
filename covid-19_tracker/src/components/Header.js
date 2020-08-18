import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_app.png";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  padding: 1%;
  margin-bottom: 1%;
`;

const LogoApp = styled.img`
  width: 160px;

  @media (max-width: 800px) {
    width: 120px;
  }
`;

// create a dropdowm menu using @material-ui
// to populate the options of the dropdown menu, lets add a state to read
// & write a variable and use it to generate oour options
// const[variable, setVariable] = useState()


function Header() {
  const [countries, setCountries] = useState([]);
// endpoint to get request about all countries
// https://disease.sh/v3/covid-19/countries
// useEffect: runs a piece of code based on a given condition
// useEffect(() => {},[]);
useEffect(() => {
    // the code will run once when the component is loaded ans not again
    // async: send a request, wait for it and do something
    const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json()) //then sendo me a response in json
        .then((data) => { //then, get from the data ...
            const countries = data.map((country) => (
                {
                    name: country.country, //'Brazil'
                    value: country.countryInfo.iso2, //'BRA'
                }));
            setCountries(countries); 
        });
    };
    getCountriesData();
}, []);

  return (
    <HeaderWrapper>
      <LogoApp src={Logo} alt="Logo Covid-19 Tracker" />
      <FormControl className="header_dropdown">
        <Select variant="outlined" value="abc">
          {/* add map to read the countries from an array and print it inside our dropdown button */}
          {countries.map((country) => (
            // when read the array countries, set and return for every country a MenuItem, with the value and name = {country}
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </HeaderWrapper>
  );
}

export default Header;
