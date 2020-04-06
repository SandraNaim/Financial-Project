import React from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';



class RegisterPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            currencies: [],
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
            currency_id: '',
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8000/api/currencies');
        const json = await response.json();

        if (json.status == 'success') {
            this.setState({
                currencies: json.data
            })
        }
    }
    onClick = (event) => {
        event.preventDefault();


        const form = event.target;
        let first_name = form.first_namee.value;
        let last_name = form.last_namee.value;

        let email = form.emaill.value;
        let password = form.passwordd.value;
        let confirmPassword = form.confirmPasswordd.value;
        let currency_id = form.id_currencyy.value;
        // check if password and confirm password are the same
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
        // Run the below if passwords are equals
            this.createUser({ first_name, last_name, email, password, currency_id });
            form.first_namee.value = "";
            form.last_namee.value = "";
            form.emaill.value = "";
            form.passwordd.value = "";
            form.confirmPasswordd.value = "";
            form.id_currencyy.value = "";
        }
        // show error if not equal
    }

    getUser = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/register");
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
            if (!props || !(props.first_name && props.last_name && props.email && props.password && props.currency_id)) {
                throw new Error(
                    `you need first_name, last_name, email, password and id currency to create an User list`
                );
            }

            const { first_name, last_name, email, password, currency_id } = props;
            debugger;
            console.log(`http://localhost:8000/api/register?first_name=${first_name}&last_name=${last_name}&email=${email}&password=${password}&currency_id=${currency_id}`)
            const response = await fetch(
                `http://localhost:8000/api/register?first_name=${first_name}&last_name=${last_name}&email=${email}&password=${password}&currency_id=${currency_id}`
            );
            const result = await response.json();
            debugger;
            if (result.success) {
                // we reproduce the user that was created in the database, locally
                const id = result.result;
                const userY = { first_name, last_name, email, password, currency_id };
                const users = [...this.state.users, userY];
                this.setState({ users, error: "" });


                this.props.logUserIn(result.token)
                this.props.history.push("/category");

            } else {
                this.setState({ error: result.message });
            }
        } catch (err) {
            this.setState({ error: err.message });
        }
    };


    render() {
        return (

            <div className="row" style={{ marginTop: "3%" }}>
                <div className=" col-md-7 mx-auto">
                    <div class="card card-signin">
                        <div className="card-body shadow-lg">
                            <h3 className="card-title text-center">Register Here</h3>
                            <hr />

                            <form onSubmit={this.onClick}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <h6>First Name</h6>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                                </div>
                                                <input name="" className="form-control" placeholder="Your Name" name="first_namee" type="text" required />
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
                                                <input className="form-control" placeholder="Your Last Name" name="last_namee" type="text" required />
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
                                                <input name="" className="form-control" placeholder="Enter your email here" name="emaill" type="email" required />
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
                                                    {
                                                        this.state.currencies.map(currency => {
                                                            return <option key={currency.id} value={currency.id}>{currency.code}</option>
                                                        })
                                                    }
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
                                                <input name="" className="form-control" name="passwordd" placeholder="*******" type="password" required />
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
                                                <input className="form-control" name="confirmPasswordd" placeholder="*******" type="password" required />
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

        )
    }
}

export default RegisterPage;

