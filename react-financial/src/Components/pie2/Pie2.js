import React from 'react';
import PieChartPage from "../PiChartPage/PieChartPage";


class Pie2 extends React.Component {


    render(){
        return(
            <>
              <div >
                    <h5><b>Incomes</b> Pie Chart</h5> 
                    <br/>
                    <PieChartPage />
                </div>
                <br/><br/>
                <div>
                    <h5><b>Expenses</b> Pie Chart</h5> 
                    <br/>
                    <PieChartPage />
                </div>

            </>
        )
    }
}
export default Pie2;