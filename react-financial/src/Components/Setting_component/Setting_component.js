import React from 'react';
import './Setting_component.css';


class Setting_component extends React.Component {

    constructor(props){
        super(props);
            
    }

    render(){
    return (

    <div className="container">
        <h3>General Setting</h3>
        <br/>
        <div className="row " style={{marginTop:"3%", marginLeft:"3%"}}>
            <div className="col-md-6 setting_one">
                <h6>Base Currency</h6>
                <div className="form-group " >
                   
                    <div className="input-group"style={{width:"280px"}} >
                                           
                        <select class="form-control" id="currency">
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
                <div className="form-group ">

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
                <h6>Expenses Category</h6>
                <div className="form-group ">

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

