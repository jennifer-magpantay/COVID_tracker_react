import React from "react";
import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";

const Overline = styled.p`
  margin: 0;
  color: #636e72;
  font-size: 12px;
  letter-spacing: 1.5;
  text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const Body = styled.p`
  margin: 5px 0 5px 0;
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const Caption = styled.p` 
margin: 0;
  color: #636e72;
  font-size: 16px;
  letter-spacing: 0.4;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

// this is one infobox, that will be replied 3 times into the main.js - cases, recovered & deaths
// the infoboxes will display the worldwide info as default when the page is loaded
// also, when a country is picked up from the list, the infoboxes number will change as well
// in addition, those boxes will receive an onclick event

function InfoBox({ title, cases, total, active,  ...props }) {
  return (
    <Card onClick={props.onClick} className={`infoBox_card ${active && 'infoBox_active'}`}>
      {/* each card content will contain: own title, own number, own current number of cases 
        and total number of cases  */}
      <CardContent>
        {/* Title */}
        <Overline>{title}</Overline>
        {/* Number of cases */}
        <Body>{cases}</Body>
        {/* Total of deaths */}
        <Caption>
        {total} total
        </Caption>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
