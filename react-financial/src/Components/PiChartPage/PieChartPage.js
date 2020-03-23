import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PieChartPage extends React.Component {
  state = {
    dataPie: {
      labels: ["#dc3f76", "#9fb328", "#f96232", "#7446b9", "#2e9ca6", "#2ea674"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120, 10],
          backgroundColor: [
            "#dc3f76",
            "#9fb328",
            "#f96232",
            "#7446b9",
            "#2e9ca6",
            "#2ea674"
          ],
          hoverBackgroundColor: [
            "#dc3f9d",
            "#b3a428",
            "#f93234",
            "#5746b9",
            "#2ea692",
            "#2ea656"
          ]
        }
      ]
    }
  }

  render() {
    return (
        <div >
            <MDBContainer>

                <Pie data={this.state.dataPie} options={{ responsive: true }} />
                
            </MDBContainer>
        </div>
      
    );
  }
}

export default PieChartPage;