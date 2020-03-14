import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToolNavbar from './Components/ToolNavbar/ToolNavbar';
import Navbar from './Components/Navbar/Navbar';
import Income_Card from './Components/Income_Card/Income_Card';


ReactDOM.render(<Income_Card/>, document.getElementById('root'));   



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
