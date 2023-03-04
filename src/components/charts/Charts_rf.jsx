import React from 'react'
import Chart from "react-apexcharts";
import { useState } from "react";

function Charts_rf() {
    const [State, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
          },
        },
        series: [
          {
            name: "Income",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          }
       
        ],
      });
    
  return (
<>
<Chart
              options={State.options}
              series={State.series}
              type="bar"
              width="450"
            />

</>
  )
}

export default Charts_rf