import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <div className="container">
                {/* <ToolNavbar/> */}
                <Route path='/'>
                   <div>
                    <Switch>
                      <Route path="/" component={Landing_Page} exact />
                      <Route path="/login" component={LoginPage} />                     
                      <Route path="/register" component={RegisterPage} />
                      <Route path="/category" component={Category} />
                      <Route path="/income_card" component={Income_Card} />
                      <Route path="/expenses_card" component={Expenses_card} />
                      <Route path="/dashboard" component={Dashboard} />
                      <Route path="/saving" component={Saving} />
                      <Route path="/transactions/income" component={IncomePage} />
                      <Route path="/transactions/expenses" component={ExpensesPage} />
                      <Route path="/setting" component={MySetting} />

                    </Switch>
                  </div> 
                  
                  {/* <Footer></Footer> */}

                </Route>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
