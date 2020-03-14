import React from "react";
import { Doughnut } from 'react-chartjs-2';


class DoughnutGraph extends React.Component {
    constructor() {
      super();
      this.state = {
        name: 'React',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
          datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
            ]
          }],
          
          
        }
      }
    }

render() {
    return (

      <Doughnut
        data={this.state.data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    )
  }
}

export default DoughnutGraph;