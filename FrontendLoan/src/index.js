import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import Codeevolution from './components/codeevolution'
import LoanApplication from './LoanComponents/LoanApplication';
import RegisterPage from './LoanComponents/RegisterPage';
import LoginorSignup from './LoanComponents/WelcomeSignin';
import LoginUser from './LoanComponents/LoginUser';



ReactDOM.render(
  <LoanApplication/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
