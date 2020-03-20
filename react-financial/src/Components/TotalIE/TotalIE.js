import React from 'react';
import Totalchart from './Totalchart';
import BarGraph from '../BarGraph/BarGraph';
import './TotalIE.css';
import LineGraph from '../LineGraph/LineGraph';


class TotalIE extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className="container dashboard-container">
                    <div className="row">
                        <div className=" col-md-8 mx-auto" >
                            <div style={{position:"relative",height:"350px", marginBottom:"10px"}} class="card card-signin">
                                <div className="card-body shadow-lg">
                                    <h3 className="card-title text-center">In Your Pocket</h3>
                                    <hr />
                                    <span className="dashboard-circle1"></span>
                                    <span className="dashboard-circle2"></span>
                                    <div className="dashboard-money">150$</div>
                                    <span style={{display: "inline-block",position:"absolute", top:"290px",left:"125px"}}>
                                        <input type="date" className="form-control" aria-describedby="emailHelp" style={{width:"200px", border: "1px solid #8a4419",borderStyle: "inset",boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)"}}/>
                                    </span>
                                    <div style={{marginLeft:"60%"}}>
                                        <img src="piggy.jpg" alt="piggy bank"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"100px"}}>
                            <div className="col-md-8" style={{marginTop:"30px"}}>
                                <LineGraph></LineGraph>
                            </div>
                            <div className="col-md-4">
                        <div className="dashboard_total">
                            <h3>Total Income</h3>
                            <p>200$</p>
                        </div>
                        <br /><br />
                        <div className="dashboard_total">
                            <h3>Total Expenses</h3>
                            <p>150$</p>
                        </div>
                    </div>
                    </div>
                    
                <br /><br />
            </div>
        </div>
                
        )
    }
}

export default TotalIE;





