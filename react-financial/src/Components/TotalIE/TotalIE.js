import React from 'react';
import Totalchart from './Totalchart';
import BarGraph from '../BarGraph/BarGraph';
import './TotalIE.css';
import LineGraph from '../LineGraph/LineGraph';
import CircleComponent from '../CircleComponent/CircleComponent';


class TotalIE extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className="container dashboard-container">

                    <div className="row">
                        <div className="col-md-6">
                            <div><h3>Your Dashboard</h3> </div>
                            <div><h6>It's time to track your incomes, expenses, and your saving money</h6></div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row" style={{justifyContent:"space-between"}}>
                        <div className=" col-md-8 align-self-center" >
                            <div className="card card-signin" style={{position:"relative",height:"460px", marginBottom:"10px", marginLeft:"60px"}} >
                                <div className="card-body shadow-lg">
                                    <h3 className="card-title text-center">Current Month</h3>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6 mx-auto" >
                                                <CircleComponent realValue='75%' titleCircle='income' restnb='25' bothnb='75, 25'/>
                                                <br/>
                                            <div>
                                                <span style={{display: "inline-block", marginBottom:"500px", marginLeft:"-10px"}}>
                                                    <input type="date" className="form-control dashboard-date" aria-describedby="emailHelp" />
                                                </span>
                                            </div>
                                        </div>
                                    
                                        <div className="col-md-5">
                                            <div className="dashboard_total">
                                                <h3>Total Income</h3>
                                                <p>200$</p>
                                            </div>
                                        <br /><br /><br />
                                            <div className="dashboard_total">
                                                <h3>Total Expense</h3>
                                                <p>150$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>



                        <div className="tips-part col-md-3" >
                            <h6>TIPS</h6>
                            <br/>
                            <div style={{color:"red",marginLeft:"20px"}}><i>HOW TO SAVE MORE MONEY</i></div>
                            <br/>
                            <ol className="Tips-style">
                                <li>Create a Monthly Budget</li>
                                <li>Cancel Subscriptions you DO NOT Use</li>
                                <li>Find Free Entertainment Options</li>
                                <li>Spend What you are Willing to Loose</li>
                                <li>Keep Track on your Expenses</li>
                            </ol>
                            <br/><br/>
                            <div>
                                <img src="pic.jpg" width="250px"  style={{marginLeft:"20px"}}/>
                            </div>
                        </div>
                    </div>
                    

                   
                    <br/><br/>
                    <div className="row" style={{justifyContent:"space-between", textAlign:"center"}}>
                        <div className="col-md-8 align-self-center" style={{marginTop:"50px", marginLeft:"20px"}}>
                            <h5 style={{color:"darkblue"}}>Tracking your recent SAVING GOALS</h5>
                            <br/>
                            <div style={{display:"flex", float:"left"}}>
                               <div style={{width:"250px"}}> <CircleComponent realValue='63%' titleCircle='goal1' restnb='37' bothnb='63, 37'/> <div>End Date: </div> </div>
                               <div style={{width:"250px"}}> <CircleComponent realValue='15%' titleCircle='goal2' restnb='85' bothnb='15, 85'/> <div>End Date: </div> </div>
                               <div style={{width:"250px"}}> <CircleComponent realValue='10%' titleCircle='goal3' restnb='90' bothnb='10, 90'/> <div>End Date: </div> </div>

                            </div>
                        </div>
                        



                        
                        <div className="col-md-3 align-self-center tips-part2" >
                        <blockquote>
                            
                                <p>All days are NOT the same. Save for rainy day. When you don't work, SAVING will work for you.</p>
                               
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





