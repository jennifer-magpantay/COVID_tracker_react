import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

//to build our charts in a easy way, we to install react-chartjs-2

//add options from the documenation project GitHUb - this is few sets to display the graphs????
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
   maintainAspectRatio: false, //accodring to react-charts, this has to be false
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

// then, add the variable buildChart, outside the function Graph
//to build the graph, you will need X and Y points to be filled with the data
//you have to create a variable to transform the data how is collected (in form of a list/array) into these points
const buildChartData = (data, casesType) => {
  // define a variable with an empty array as value
  const chartData = [];
  let lastDataPoint;
  //pass a for each loop to read each date of the data
  for (let date in data.cases) {
    //if the lastDataPoint is empty, then set a new data into a chart format: with x and y points
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      // then, push the newDataPoint to the chart
      chartData.push(newDataPoint);
    }
    //if not/else, then set the data as lastDataPoint value
    lastDataPoint = data[casesType][date];
  }
  // then, return/display the value of the chartData
  return chartData;
};

// finally, the function, that will use as param casesType
function Graph({ casesType= "cases" }) {
  const [data, setData] = useState({});

  useEffect(() => {
    //use async and await to fecth data using a endpoint from the API
    //we are using an endpoint from last 3 months
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };
    fetchData();
  }, [casesType]);

  return (
    <Card className="graph_card">
      <h4>GRAPHIC</h4>
      <CardContent>
        {/* check if the data existis, if its lenght is greater than 0 */}
        {/* then, if the data existis, then, do whatever is inside () */}
        {data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  type: 'line',
                  data: data,
                  borderColor: "#2980b9",
                },
              ],
            }}
            options={options}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default Graph;
