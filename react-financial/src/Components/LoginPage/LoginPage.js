import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    
    onSubmitLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/login?email=${this.state.email}&password=${this.state.password}`, {
                headers: {
                    'Accept': "application/json"
                }
            });
            const json = await response.json();
            
            if (json.success) {
                this.props.logUserIn(json.token);
                this.props.history.push("/portal/dashboard");
            }
        } catch (e) {
            alert(e.message)
        }
    }
    
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div className="row">
        <div className=" col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
                <div className="card-body shadow-lg">
                    <h3 className="card-title text-center">Login</h3>
	                 <hr />
                    <form onSubmit={this.onSubmitLogin}>
                        <div className="form-group">
                            <h6>Email</h6>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                </div>
                                <input name="email" onChange={this.handleInputChange} className="form-control"
                                       placeholder="Enter your email here" type="email"
                                       required />
                            </div> 
                        </div> 
                        <div className="form-group">
                            <h6>Password</h6>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                </div>
                                <input name="password" onChange={this.handleInputChange} className="form-control"
                                       placeholder="******" type="password" required />
                            </div>
                        </div> 
                        <div className="form-group">
                            <button onClick="" type="submit" className="btn btn-primary btn-block"> Login  </button>
                        </div> 
                        <p className="text-center"><a href="#" className="btn text-primary">Forgot password?</a></p>
                        <p className="text-center">Do you wish to register for a <br />
                        <Link to="/register" className="btn text-primary">New Account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        
        )
    }
}

export default LoginPage;

