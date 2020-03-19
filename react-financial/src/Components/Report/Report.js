import React from 'react';
import PieChartPage from "../PiChartPage/PieChartPage";
import './Report.css';
import PiButton from './PiButton';
import TotalBar from './TotalBar';

class Report extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            incomes: [],
            expenses: [],
            transactions: [

                {
                    id: 1,
                    amount: 22,
                    startDate: 20-12-2002,
                    endDate: null,
                    type: 'income'
                }
            ]
        }
    }



render() {
    return (
        <div className="container dashboard-container">

            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-12 report-box">
                    <div className="btn-group report-btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-info mr-2">Weekly</button>
                        <button type="button" class="btn btn-info mr-2">Monthly</button>
                        <button type="button" class="btn btn-info">Yearly</button>
                    </div>
                
                    <div style={{marginTop:"25px", marginLeft:"20px"}}>
                        <button class="report-button mr-2">Incomes </button>
                        <button class="report-button">Expenses</button>

                        {/* <span ><PiButton styleBtn = 'primary' Btntype = 'Income'></PiButton>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span><PiButton styleBtn = 'secondary' Btntype = 'Expenses'></PiButton></span> */}
                    </div>
                </div>
            </div>       
            <br/><br/>

            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-8">
                    <div  style={{marginLeft:"150px"}}>
                    <TotalBar />
                    </div>
                </div>
            </div>

            <br /><br /><br />

            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-6" style={{textAlign:"center", color:"darkblue"}}>
                    <h3>Incomes PieChart</h3> <br/>
                    <PieChartPage />
                </div>
                <div className="col-md-6" style={{textAlign:"center", color:"darkgreen"}}>
                    <h3>Expenses PieChart</h3> <br/>
                    <PieChartPage />
                </div>
            
            </div>


        </div>

    )
}

}

export default Report;
