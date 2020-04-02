import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ToolNavbar from './Components/ToolNavbar/ToolNavbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Income_Card from './Components/Income_Card/Income_Card';
import Expenses_card from './Components/Expenses_card/Expenses_card';
import IncomePage from './Components/IncomePage/IncomePage';
import Transaction_expense from './Pages/Transaction_expense/Transaction_expense';
import Transaction_income from './Pages/Transaction_income/Transaction_income';
import Landing_Page from './Pages/Landing_Page/Landing_Page';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import Landing_Navbar from './Components/Landing_Navbar/Landing_Navbar';
import Category from './Components/Category/Category';
import ExpensesPage from './Components/ExpensesPage/ExpensesPage';
import MySetting from './Pages/MySetting/MySetting';
import Saving from './Pages/Saving/Saving';
import About from './Pages/About/About';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      categories: [],
      loggedIn: false
    }
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


  getCategory = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/categories");
        const result = await response.json();
        console.log(result);
        if (result.success) {
            this.setState({ categories: result.result, error: "" });
        } else {
            this.setState({ error: result.message });
        }
    } catch (err) {
        this.setState({ error: err });
    }
};

createCategory = async props => {
    try {
        if (!props || !(props.name)) {
            throw new Error(
                `you need category name to create a Category list`
            );
        }
        const { name } = props;
        const response = await fetch(
            `http://localhost:8000/api/categories/create?name=${name}}`
        );
        const result = await response.json();
        if (result.success) {
            // we reproduce the user that was created in the database, locally
            const id = result.result;
            const categoryY = { name };
            const categories = [...this.state.categories, categoryY];
            this.setState({ categories, error: "" });
        } else {
            this.setState({ error: result.message });
        }
    } catch (err) {
        this.setState({ error: err.message });
    }
};






  async componentDidMount() {

    this.getUser();
    this.getCategory();

    // fake login after refresh
 /*    const token = localStorage.getItem('token');
    if (token != null) {
      setTimeout(() => {
        this.logUserIn()
      }, 500)
    } */
  }
  logUserIn = () => {
    // we will get the token from the fetch

    localStorage.setItem('token', 'afakeone');

    this.setState({
      loggedIn: true
    })
  }

  logUserOut = () => {
    localStorage.removeItem('token');
    this.setState({
      loggedIn: false
    })
  }






  render() {
    return (
      <>
       
          <div className="container">
            {/* <ToolNavbar/> */}
            <div>
              <Switch>

                {
                  !this.state.loggedIn ? (
                    <>
                      <Route path="/" component={Landing_Page} exact />
                      <Route path="/about" component={About} exact />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/register" render={props => <RegisterPage {...props} logUserIn={this.logUserIn} />} />
                    </>
                  ) : (
                      <>

                        <Route path="/category" component={Category} />
                        <Route path="/income_card" component={Income_Card} />
                        <Route path="/expenses_card" component={Expenses_card} />
                        <Route path="/" render={props => <ToolNavbar {...props} logUserOut={this.logUserOut}/>} />



                      </>
                    )
                }

              </Switch>
            </div>

            {/* <Footer></Footer> */}


          </div>

      </>
    );
  }
}
export default App;
