import React, { Fragment } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './ToolNavbar.css';
import IncomePage from '../IncomePage/IncomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Income_Card from '../Income_Card/Income_Card';
import Expenses_card from '../Expenses_card/Expenses_card';
import Transaction_income from '../../Pages/Transaction_income/Transaction_income';
import Transaction_expense from '../../Pages/Transaction_expense/Transaction_expense';



function ToolNavbar() {
    return (

<Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            
            <SideNav className="sidenav---_u0En"
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
>
    <SideNav.Toggle /> 
    <SideNav.Nav defaultSelected="Dashboard">
        <NavItem eventKey="Dashboard">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>
        <NavItem eventKey="Transaction">
            <NavIcon>
                <i className="fa fa-money" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Transaction
            </NavText>
            <NavItem eventKey="Transactions/income">
                <NavText>
                    Incomes
                </NavText>
            </NavItem>
            <NavItem eventKey="Transactions/expenses">
                <NavText>
                    Expenses
                </NavText>
            </NavItem>
        </NavItem>
        {/* <NavItem eventKey="reports">
            <NavIcon>
                <i className="fa fa-bar-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Reports
            </NavText>
        </NavItem> */}
        
        <NavItem eventKey="setting" style={{marginTop:"150px"}}>
            <NavIcon>
                <i className="fa fa-cog fa-fw" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Setting
            </NavText>
        </NavItem>
        <NavItem eventKey="help">
            <NavIcon>
                <i className="fa fa-book fa-fw" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Help
            </NavText>
        </NavItem>
        <NavItem eventKey="about">
            <NavIcon>
                <i className="fa fa-pencil fa-fw" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                About
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
            <main>
                <Route path="/Dashboard" exact component={props => <Dashboard />} />
                <Route path="/Transactions/income" component={props => <Transaction_income/>} />
                <Route path="/Transactions/expenses" component={props => <Transaction_expense/>} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
    )
}


export default ToolNavbar;

