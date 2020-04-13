import React, { Fragment } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './ToolNavbar.css';
import IncomePage from '../IncomePage/IncomePage';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Income_Card from '../Income_Card/Income_Card';
import Expenses_card from '../Expenses_card/Expenses_card';
import Transaction_income from '../../Pages/Transaction_income/Transaction_income';
import Transaction_expense from '../../Pages/Transaction_expense/Transaction_expense';
import Saving from '../../Pages/Saving/Saving';
import MySetting from '../../Pages/MySetting/MySetting';
import About from '../../Pages/About/About';
import Help from '../../Pages/Help/Help';
import Landing_Page from '../../Pages/Landing_Page/Landing_Page'



function ToolNavbar(props) {
    return (

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
                    <SideNav.Nav defaultSelected="portal/dashboard">
                        <NavItem eventKey="portal/dashboard">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="portal/saving">
                            <NavIcon>
                                <i className="fa fa-fw fa-save" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Saving Goals
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="transaction">
                            <NavIcon>
                                <i className="fa fa-money" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Transaction
                            </NavText>
                        <NavItem eventKey="portal/transactions/income">
                            <NavText>
                                    Incomes
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="portal/transactions/expenses">
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

                        <NavItem eventKey="portal/setting" style={{ marginTop: "150px" }}>
                            <NavIcon>
                                <i className="fa fa-cog fa-fw" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Setting
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="portal/help">
                            <NavIcon>
                                <i className="fa fa-book fa-fw" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Help
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="portal/about">
                            <NavIcon>
                                <i className="fa fa-pencil fa-fw" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                About
                            </NavText>
                        </NavItem>

                        <NavItem onClick={
                            event => {
                                event.preventDefault();
                               
                                props.logUserOut();
                                setTimeout(function(){
                                    props.history.push('/');
                                },
                                500
                                )
                               
                            }
                        }>
                            <NavIcon>
                                <i className="fa fa-sign-out fa-fw" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText >
                                Log Out
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <main>
                    <Route path="/portal/dashboard" exact component={props => <Dashboard />} />
                    <Route path="/portal/saving" component={props => <Saving />} />
                    <Route path="/portal/transactions/income" component={props => <Transaction_income />} />
                    <Route path="/portal/transactions/expenses" component={props => <Transaction_expense />} />
                    <Route path="/portal/setting" component={props => <MySetting />} />
                    <Route path="/portal/about" component={props => <About />} />
                    <Route path="/portal/help" component={props => <Help />} />
                   {/*  <Route path="/" component={props => <Landing_Page />} /> */}

                </main>
            </React.Fragment>
        )}
        />
    )
}


export default ToolNavbar;

