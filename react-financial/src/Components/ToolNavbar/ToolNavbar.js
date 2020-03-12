import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './ToolNavbar.css';


function ToolNavbar() {
    return (

<SideNav className="sidenav---_u0En"
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle /> 
    <SideNav.Nav defaultSelected="dashboard">
        <NavItem eventKey="dashboard">
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
            <NavItem eventKey="transaction/incomes">
                <NavText>
                    Incomes
                </NavText>
            </NavItem>
            <NavItem eventKey="transaction/expenses">
                <NavText>
                    Expenses
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="reports">
            <NavIcon>
                <i className="fa fa-bar-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Reports
            </NavText>
        </NavItem>
        
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

    )
}


export default ToolNavbar;

