import React from "react";
import { Doughnut } from 'react-chartjs-2';


class Totalchart extends React.Component {
    constructor() {
      super();
      this.state = {
        name: 'React',

        data: {
            labels: [
                'Red',
                'Blue',
              ],
            datasets: [{
            data: [10, 30],
            backgroundColor: [
                "red",
                "lightred",
            ]    
          }],  
        },
      }
    }

render() {
    return (

      <Doughnut
        data={this.state.data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          cutoutPercentage: 70,
          
            center: {
                display: true,
                text: "280",
            }
          
        }}
       
        
      />
    )
  }
}

export default Totalchart;