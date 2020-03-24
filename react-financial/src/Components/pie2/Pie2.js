import React from 'react';
import PieChartPage from "../PiChartPage/PieChartPage";


class Pie2 extends React.Component {


    render(){
        return(
            <>
              <div >
                    <h5>Pie Chart showing your <b>Incomes</b></h5> 
                    <br/>
                    <PieChartPage />
                </div>
                <br/><br/>
                <div>
                    <h5>Pie Chart showing your <b>Expenses</b></h5> 
                    <br/>
                    <PieChartPage />
                </div>

            </>
        )
    }
}
export default Pie2;