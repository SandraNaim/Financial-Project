import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class BarGraph extends React.Component {
  render() {
    return (
      <div >
        <Bar
          data={state}
          options={{
            
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}