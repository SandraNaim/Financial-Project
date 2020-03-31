import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';



class LoginPage extends React.Component {

 /* constructor(props){
        super(props)
    } */

    onClick=(event)=>{
        event.preventDefault();
        this.props.history.push("/dashboard");

    }

    render(){
    return (
    <div className="row">
        <div className=" col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div className="card-body shadow-lg">
                    <h3 className="card-title text-center">Login</h3>
	                 <hr/>
                    <form onSubmit={this.onClick}>
                        <div className="form-group">
                            <h6>Email</h6>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Enter your email here" type="email" required/>
                            </div> 
                        </div> 
                        <div className="form-group">
                            <h6>Password</h6>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input className="form-control" placeholder="******" type="password" required/>
                            </div>
                        </div> 
                        <div className="form-group">
                            <button onClick="" type="submit" className="btn btn-primary btn-block"> Login  </button>
                        </div> 
                        <p class="text-center"><a href="#" className="btn text-primary">Forgot password?</a></p>
                        <p class="text-center">Do you wish to register for a <br/>
                        <Link to="/register" className="btn text-primary">New Account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div> 
        
    )}
}

export default LoginPage;

