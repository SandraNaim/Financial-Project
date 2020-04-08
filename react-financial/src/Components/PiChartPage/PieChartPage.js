import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const backgroundColor = [
  "#dc3f76",
  "#9fb328",
  "#f96232",
  "#7446b9",
  "#2e9ca6",
  "#2ea674"
]
const hoverBackgroundColor = [
  "#dc3f9d",
  "#b3a428",
  "#f93234",
  "#5746b9",
  "#2ea692",
  "#2ea656"
]


class PieChartPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const dataPie = {
      labels: [...this.props.categoryName],
      datasets: [
        {
          data: [...this.props.categoryAmount],
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor,
        }
      ]
    }
    return (
      <div >
        {JSON.stringify(dataPie)}
        <MDBContainer>

          <Pie data={dataPie} options={{ responsive: true }} />

        </MDBContainer>
      </div>

    );
  }
}

export default PieChartPage;