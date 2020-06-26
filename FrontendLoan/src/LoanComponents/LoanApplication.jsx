import React, { Component } from 'react';
import Welcome from './Welcome';
import WelcomeSignin from './WelcomeSignin';
import './StyleSheets.css'
import About from './About';
import RegisterPage from './RegisterPage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginUser from './LoginUser';
import Profile from './Profile';
//import logo from '.logo.svg';
import spain from './images/spain.jpg'
import LoanForm from './LoanForm'
import StudentLoan from './StudentLoan'
import HomeLoan from './HomeLoan'
import BusinessLoan from './BusinessLoan'
import PersonalLoan from './PersonalLoan'
import VehicleLoan from "./VehicleLoan";
import RegisterSucess from './RegisterSucess';
import LoanSuccess from './LoanSuccess';
import CancelLoan from './CancelLoan';
import CheckStatus from './CheckStatus';
import Bar from './bar';
import Home from './Home'
import LoginManager from './WelcomeLoginManager'
import ApprovedLoans from './approvedloans'
import RejectedLoans from './rejectedloans'
import PendingLoans from './pendingloans'
import AuthService from './AuthService.js'
import Logout from './Logout'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import AuthSignin from './AuthSignin'
import ModifyLoanUser from './ModifyLoanUser';
import handlerejectloan from './handlerejectloan';
import handleapproveloan from './handleapproveloan';
import Footer from './Footer';



class LoanApplication extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <div align ='center' >
                    
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' component={About}/>
                        <AuthSignin path='/signin' component={WelcomeSignin}/>
                        <AuthSignin path='/register' exact component={RegisterPage}/>
                        <AuthenticatedRoute path='/login/profile' component={Profile}/>
                        {/* <AuthenticatedRoute path='/login/:name' exact component={LoginUser }  /> */}
                        <AuthenticatedRoute path='/login' exact component={LoginUser }  />
                        <AuthenticatedRoute path='/login/manager/pendingloans/rejectloan/:loanId' exact component={handlerejectloan }  />
                        <AuthenticatedRoute path='/login/manager/pendingloans/approveloan/:loanId' exact component={handleapproveloan }  />
                        <AuthenticatedRoute path='/logout' exact component={Logout}  />
                        <AuthenticatedRoute path='/login/loanform/:loanId' component={LoanForm}/>
                        <AuthenticatedRoute path='/login/loanform/:loanId' component={LoanForm}/>
                        <AuthenticatedRoute path='/login/loanform/:loanId' component={LoanForm}/>
                        <AuthenticatedRoute path='/login/loanform/:loanId' component={LoanForm}/>
                        <AuthenticatedRoute path='/login/loanform/:loanId' component={LoanForm}/>
                        <AuthenticatedRoute path='/studentloan' exact component={StudentLoan}/>
                        <AuthenticatedRoute path='/businessloan'exact component={BusinessLoan} />
                        <AuthenticatedRoute path='/personalloan'exact  component={PersonalLoan} />
                        <AuthenticatedRoute path='/vehicleloan' exact component={VehicleLoan }/>
                        <AuthenticatedRoute path='/homeloan'exact component={HomeLoan }/>
                        <Route path='/register/success' component={RegisterSucess} />
                        <AuthenticatedRoute path='/loansuccess' component={LoanSuccess} />
                        <AuthenticatedRoute path='/login/cancelloan' component={CancelLoan} />
                        <AuthenticatedRoute path='/login/checkstatus' component={CheckStatus} />
                        <AuthenticatedRoute path='/login/updateloan/:loanId' component={ModifyLoanUser} />
                        <AuthenticatedRoute path='/login/manager' exact component={LoginManager}/>
                        <AuthenticatedRoute path='/login/manager/aprovedloans' component={ApprovedLoans}/>
                        <AuthenticatedRoute path='/login/manager/pendingloans' exact component={PendingLoans}/>
                        <AuthenticatedRoute path='/login/manager/rejectedloans' component={RejectedLoans}/>
                        <Route component={ErrorComponent}/>
                        
                    </Switch>
                    {/* <Footer /> */}
                </div>
               
                <div>

                </div>
            </Router>
            
         );
    }
}
function ErrorComponent(){
    return <div>An error ocurred.</div>
}
 
export default LoanApplication;

