import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome'

class PersonalLoan extends Component {
    state = {  }
    render() { 
        return (  
            <div className='LoanApplication'>
                <Welcome/>
                <br/>
            <br/>
            <div className='loginUser'>
                <br />
                <h1><b>Personal </b>Loan</h1>
                <br/>
                <p>Apart from being the most reliable way to get funds for your immediate needs, availing of a Personal Loan has many benefits, which are:

Once your application is approved, the funds are credited to your account within three seconds.
We give you the flexibility to choose the loan tenure. You can apply for a loan from 12 to 60 months.
Our online services allow you to keep track of the application status and get any assistance you want 24x7.
Minimum documents needed.
The interest rate is fixed and it remains the same throughout the loan tenure.
You need not provide any collateral or security.
The benefits are applicable for select customers upon completion of online verification and acceptance of the final offer</p>
<div className='loginbut'>
                
              
                <Link className='linkWelcome' to='/login'>
                    <button className='btn btn-dark btn-lg '> Previous</button>
                </Link>
                <span class="tab"></span>
                <Link className='linkWelcome' to='/login/loanform/-1'>
                    <button className='btn btn-dark btn-lg'>Get Form</button>
                </Link> 
              
            </div>
            </div>
            </div>
        );
    }
}
 
export default PersonalLoan;