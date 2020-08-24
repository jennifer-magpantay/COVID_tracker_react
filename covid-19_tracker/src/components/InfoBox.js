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

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox_card">
      {/* each card content will contain: own title, own number, own current number of cases 
        and total number of cases  */}
      <CardContent className="content">
        {/* Title */}
        <Overline className="infoBox_overline">{title}</Overline>
        {/* Number of cases */}
        <Body className="infoBox_body">{cases}</Body>
        {/* Total of deaths */}
        <Caption className="infoBox_caption" color="textSecondary">
          {total} total
        </Caption>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
