import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infobox_card">
        {/* each card content will contain: own title, own number, own current number of cases 
        and total number of cases  */}
      <CardContent>
        {/* Title */}
        <Typography className="infoBox_title" color="textSecondary">{title}</Typography>
        {/* Number of cases */}
        <h2 className="infoBox_cases">{cases}</h2>
        {/* Total of deaths */}
        <Typography className="infoBox_total" 
        color="textSecondary">{total} total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
