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



                        <div className="tips-part">
                            <h4>TIPS</h4>
                            <br/>
                            <h6 style={{color:"red",marginLeft:"20px"}}><i>HOW TO SAVE MORE MONEY</i></h6>
                            
                            <img src="https://media.giphy.com/media/ruOt3vkom6WGY/giphy.gif" width="150px" alt=""style={{marginLeft:"40px", marginBottom:"10px"}}/>
                            <ol className="Tips-style">
                                <li>Create a Monthly Budget</li>
                                <li>Cancel Subscriptions you DO NOT Use</li>
                                <li>Find Free Entertainment Options</li>
                                <li>Spend What you are Willing to Loose</li>
                                <li>Keep Track on your Expenses</li>
                            </ol>
                        </div>
                        </div>
                    

                   

                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-6" style={{marginTop:"50px", marginLeft:"140px"}}>
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



                        
                        <div className="tips-part2">
                        <blockquote>
                            <div class="row">
                                <div class="col-sm-3 text-center">
                                </div>
                                <div class="col-sm-9">
                                <p>All days are NOT the same. Save for rainy day. When you don't work, SAVING will work for you.</p>
                                </div>
                            </div>
                        </blockquote>
                        </div>

                    </div>
                </div>    
                <br /><br />
            </div>
        
                
        )
    }
}

export default TotalIE;





