import React from "react";
import numeral from 'numeral';
import { Card, CardContent } from "@material-ui/core";

function Table({ countries }) {
  return (
    <Card className="table_card">
      <h4>RANKING &nbsp;&nbsp;|&nbsp;&nbsp;CASES BY COUNTRY</h4>
      <CardContent>
        <div className="table">
          {countries.map(({ country, cases }) => (
            <tr>
              <td>{country}</td>
              <td>{numeral(cases).format(0,0)}</td>
            </tr>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Table;
