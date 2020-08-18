import React from "react";
import styled from "styled-components";
import Header from "./Header";
import InfoBox from './InfoBox';
import Map from './Map';

const MainWrapper = styled.main`
  width: 60vw;
  height: 100vh;
  padding: 1% 2%;
  background-color: var(--orange);

  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
  }
`;

function Main() {
  return (
    <MainWrapper>
      <Header />
      <InfoBox />
      <Map />
    </MainWrapper>
  );
}

export default Main;
