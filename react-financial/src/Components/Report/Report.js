import React from 'react';
import PieChartPage from "../PiChartPage/PieChartPage";
import './Report.css';
import PiButton from './PiButton';
import TotalBar from './TotalBar';
import Pie2 from '../pie2/Pie2';



function Graphswitch(props){
    if(props.value){
        return <TotalBar />
    }
        return <Pie2 />
}
 

class Report extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : true,
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

    handleClick = ()=> {
        this.setState({
            value : !this.state.value
        });
    }



render() {
    return (
        <div className="container dashboard-container">

            <div className="row" >
               
                <div className="col-md-8 report-switch">
                  <h4> 
                      <div><a>|</a> <a href=""><u>Weekly</u></a> <a>|</a> <a href=""><u>Monthly</u></a> <a>|</a> <a href=""><u>Yearly</u></a> <a>|</a> 
                      </div>
                                              
                    </h4>
                    <br/>
                    <div style={{fontSize:"20px"}}><i>Reports for traking your income and expenses</i></div>
                </div>
                
            </div>       

            <div className="row" style={{justifyContent:"space-between", marginTop:"50px"}}>
                <div className="col-md-8"style={{textAlign:"center"}}>
                        
                        <button onClick={this.handleClick} type="button" class="report-button mr-2">
                            {this.state.value ?  <span>Pie Chart</span>: <span>Bar Chart</span>}
                            </button>
                            <br/><br/><br/> 
                        <Graphswitch value = {this.state.value} />


                </div>
                <div className="col-md-3">
                    <blockquote class="blockquote tips-part3">
                            <p class="mb-0">However beautiful the strategy, you should occasionally look at the results.</p>
                            <footer class="blockquote-footer">Winston Churchill</footer>
                    </blockquote>
                </div>              
            </div>



        </div>

    )
}

}

export default Report;
