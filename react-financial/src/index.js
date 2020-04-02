import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToolNavbar from './Components/ToolNavbar/ToolNavbar';
import Navbar from './Components/Landing_Navbar/Landing_Navbar';
import PieChartPage from './Components/PiChartPage/PieChartPage';
import LineGraph from './Components/LineGraph/LineGraph';
import BarGraph from './Components/BarGraph/BarGraph';
import DoughnutGraph from './Components/Doughnut/DoughnutGraph';
import Income_Card from './Components/Income_Card/Income_Card';
import Expenses_card from './Components/Expenses_card/Expenses_card';
import Saving_Card from './Components/Saving_Card/Saving_Card';
import 'antd/dist/antd.css';  
import RegisterPage from './Components/RegisterPage/RegisterPage';
import LoginPage from './Components/LoginPage/LoginPage';
import TotalIE from './Components/TotalIE/TotalIE';
import MonthPicker from './Components/MonthPicker/MonthPicker'
import PiButton from './Components/Report/PiButton';
import Dashboard from './Pages/Dashboard/Dashboard';
import Report from './Components/Report/Report';
import TotalBar from './Components/Report/TotalBar';
import IncomePage from './Components/IncomePage/IncomePage';
import Pie2 from './Components/pie2/Pie2';
import Category from './Components/Category/Category';
import Transaction_income from './Pages/Transaction_income/Transaction_income'
import Saving from './Pages/Saving/Saving';
import ExpensesPage from './Components/ExpensesPage/ExpensesPage';
import Transaction_expense from './Pages/Transaction_expense/Transaction_expense';
import CircleComponent from './Components/CircleComponent/CircleComponent';
import NewToolbar from './Components/NewToolbar/NewToolbar';
import Landing_Page from './Pages/Landing_Page/Landing_Page';
import Landing_Navbar from './Components/Landing_Navbar/Landing_Navbar';
import About from './Pages/About/About';
import Setting_component from './Components/Setting_component/Setting_component';


ReactDOM.render(<About/>, document.getElementById('root'));  




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
