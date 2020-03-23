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

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <div className="container">
                <Route path='/'>
                  <ToolNavbar></ToolNavbar>
                  {/* <div>
                    <Switch>
                      <Route path="/" component={Dashboard} exact />
                      <Route path="/Transactions/income" component={Transaction_income} />                     
                      <Route path="/Transactions/expenses" component={Transaction_expense} />
                    </Switch>
                  </div> */}
                  
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
