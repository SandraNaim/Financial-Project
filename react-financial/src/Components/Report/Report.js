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

            <div className="row" >
                {/* <div className="col-md-5 report-box">
                    <div className="btn-group report-btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="report-button mr-2">Weekly</button>
                        <button type="button" class="report-button mr-2">Monthly</button>
                        <button type="button" class="report-button">Yearly</button>
                    </div>
                </div> */}
                <div className="col-md-8 report-switch">
                  <h4> 
                      <div><a>|</a> <a href=""><u>Weekly</u></a> <a>|</a> <a href=""><u>Monthly</u></a> <a>|</a> <a href=""><u>Yearly</u></a> <a>|</a> 
                      </div>
                      <hr />
                    </h4>
                </div>
                
            </div>       

            <div className="row" style={{justifyContent:"space-between", marginTop:"50px"}}>
                <div className="col-md-8">
                    <TotalBar />
                </div>
                <div className="col-md-3">
                    <blockquote class="blockquote">
                            <p class="mb-0">However beautiful the strategy, you should occasionally look at the results.</p>
                            <footer class="blockquote-footer">Winston Churchill</footer>
                    </blockquote>
                </div>              
            </div>


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
