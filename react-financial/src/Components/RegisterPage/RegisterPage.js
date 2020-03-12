import React from 'react';
import './RegisterPage.css';


function RegisterPage() {
    return (
    <div className="row" style={{marginTop:"2%"}}>
        <div className=" col-md-7 mx-auto">
            <div class="card card-signin">
                <div className="card-body shadow-lg">
                    <h3 className="card-title text-center">Register Here</h3>
	                 <hr/>

                    <form>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>First Name</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Your Name" type="text" required/>
                                    </div> 
                                </div> 
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Last Name</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder="Your Last Name" type="text" required/>
                                    </div>
                                </div> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h6>Email</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Enter your email here" type="email" required/>
                                    </div> 
                                </div> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Password</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="*******" type="password" required/>
                                    </div> 
                                </div> 
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Re-Password</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder="*******" type="password" required/>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        <p className="text-center">To start creating your account click the Register button</p>
                     
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div> 
                        
                    </form>
                </div>
            </div>
        </div>
    </div> 
        
    )
}

export default RegisterPage;

