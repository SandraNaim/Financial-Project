import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToolNavbar from './Components/ToolNavbar/ToolNavbar';
import Navbar from './Components/Navbar/Navbar';
import PieChartPage from './Components/PiChartPage/PieChartPage';
import LineGraph from './Components/LineGraph/LineGraph';
import BarGraph from './Components/BarGraph/BarGraph';
import DoughnutGraph from './Components/Doughnut/DoughnutGraph';
import Income_Card from './Components/Income_Card/Income_Card';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import LoginPage from './Components/LoginPage/LoginPage';
import TotalIE from './Components/TotalIE/TotalIE';
import MonthPicker from './Components/MonthPicker/MonthPicker'
import PiButton from './Components/Report/PiButton';
import Dashboard from './Pages/Dashboard/Dashboard';
import Report from './Components/Report/Report';
import TotalBar from './Components/Report/TotalBar';

ReactDOM.render(<TotalIE/>, document.getElementById('root'));   

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
