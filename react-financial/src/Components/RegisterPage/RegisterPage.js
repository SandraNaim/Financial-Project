import React from 'react';
import './RegisterPage.css';
import {Link} from 'react-router-dom';



class RegisterPage extends React.Component {

    constructor(props){
        super(props)
        this.state={
            users: [],

            name:'',
            email:'',
            password:'',
            id_currency:'',
        }
    }

    onClick=(event)=>{
        event.preventDefault();
        this.props.logUserIn()
        this.props.history.push("/category");


        const form=event.target;
        let name=form.namee.value;
        let email=form.emaill.value;
        let password=form.passwordd.value;
        let id_currency=form.id_currencyy.value;
        this.createUser({name, email, password, id_currency});
        form.namee.value="";
        form.emaill.value="";
        form.passwordd.value="";
        form.id_currencyy.value="";
    
      } 

      getUser = async () => {
        try {
          const response = await fetch("http://localhost:8000/api/users");
          const result = await response.json();
          console.log(result);
          if (result.success) {
            this.setState({ users: result.result, error: "" });
          } else {
            this.setState({ error: result.message });
          }
        } catch (err) {
          this.setState({ error: err });
        }
      };
    
      createUser = async props => {
        try {
          if (!props || !(props.name && props.email && props.password && props.id_currency)) {
            throw new Error(
              `you need name, email, password and id currency to create an User list`
            );
          }
          const { name, email, password, id_currency} = props;
          const response = await fetch(
            `http://localhost:8000/api/users/create?name=${name}&email=${email}&password=${password}&id_currency=${id_currency}`
          );
          const result = await response.json();
          if (result.success) {
            // we reproduce the user that was created in the database, locally
            const id = result.result;
            const userY = { name, email, password, id_currency };
            const users = [...this.state.users, userY];
            this.setState({ users, error: "" });
          } else {
            this.setState({ error: result.message });
          }
        } catch (err) {
          this.setState({ error: err.message });
        }
      };


    render(){
    return (
        
    <div className="row" style={{marginTop:"3%"}}>
        <div className=" col-md-7 mx-auto">
            <div class="card card-signin">
                <div className="card-body shadow-lg">
                    <h3 className="card-title text-center">Register Here</h3>
	                 <hr/>

                    <form onSubmit={this.onClick}>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>First Name</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Your Name" name="namee" type="text" required/>
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
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Email</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Enter your email here" name="emaill" type="email" required/>
                                    </div> 
                                </div> 
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Base Currency</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-dollar"></i> </span>
                                        </div>
                                        <select class="form-control" id="currency" name="id_currencyy" required>
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

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Password</h6>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input name="" className="form-control" name="passwordd" placeholder="*******" type="password" required/>
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
                                <button type="submit" onClick="" className="btn btn-primary">Register</button>
                            
                        </div> 
                        
                    </form>
                </div>
            </div>
        </div>
    </div> 
        
    )}
}

export default RegisterPage;

