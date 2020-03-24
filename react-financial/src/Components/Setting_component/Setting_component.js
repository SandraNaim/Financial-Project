import React from 'react';
import './Setting_component.css';


class Setting_component extends React.Component {

    constructor(props){
        super(props);
            
    }

    render(){
    return (

    <div className="container"style={{ marginBottom:"3%"}}>
        <h3>General Setting</h3>
        <br/> <br/>
        <div className="row" style={{ marginLeft:"3%"}}>
            <div className="col-md-10 setting_one">
                <h6>Change your Name</h6>
                <div className="form-group" style={{ marginLeft:"15%",marginRight:"15%"}}>

                    <input disabled="disabled" style={{width:"300px"}} type="text" class="form-control" id="username" placeholder="Enter your name"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>Update</button>
                </div>
            </div>
        </div>
        <hr/>
        <br/>
        <div className="row" style={{ marginLeft:"3%"}}>
            <div className="col-md-10 setting_one">
                <h6>Change your Password</h6>
                <div className="form-group " style={{ marginLeft:"12%",marginRight:"15%"}}>

                    <input disabled="disabled" style={{width:"300px"}} type="text" class="form-control" id="userpassword" placeholder="Enter your password"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>Update</button>
                </div>
            </div>
        </div>
        <hr/>
        <br/>
        <div className="row " style={{marginTop:"3%", marginLeft:"3%"}}>
            <div className="col-md-10 setting_one">
                <h6>Base Currency</h6>
                <div className="form-group " style={{ marginLeft:"20%"}}>
                   
                    <div className="input-group"style={{width:"300px"}} >
                                           
                        <select class="form-control" id="currency" >
                            <option>$</option>
                            <option>L.L</option>
                            <option>AED</option>
                            <option>Yen</option>
                            <option>Shekels</option>
                        </select>
                    </div> 
                </div>
            </div>
        </div>
        <hr/>
        <br/>
        <div className="row" style={{ marginLeft:"3%"}}>
            <div className="col-md-10 setting_one">
                <h6>Income Category</h6>
                <div className="form-group " style={{ marginLeft:"17%"}}>

                    <input disabled="disabled" style={{width:"300px"}} type="text" class="form-control" id="incomecat" placeholder="Enter your income category"/>
                
                   
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>+ ADD</button>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>Update</button>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>- Delete</button>
                </div>
            </div>
        </div>
        <hr/>
        <br/>
        <div className="row" style={{ marginLeft:"3%"}}>
            <div className="col-md-10 setting_one">
                <h6>Expense Category</h6>
                <div className="form-group " style={{ marginLeft:"15%"}}>

                    <input disabled="disabled" style={{width:"300px"}} type="text" class="form-control" id="expensecat" placeholder="Enter your expense category"/>
                
                   
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>+ ADD</button>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>Update</button>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(54, 54, 112)',height:"40px" }}>- Delete</button>
                </div>
            </div>
        </div>
                       
                
                
        
    </div> 
    )
    }
}

export default Setting_component;

