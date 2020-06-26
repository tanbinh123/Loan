import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome'

class BusinessLoan extends Component {
    state = {  }
    render() { 
        return (  
            <div className='LoanApplication'>
                <Welcome />
            <br/>
            <br/>
            <div className='loginUser'>
                <br />
                <h1><b>Business </b>Loan</h1>
                <br/>
                <p>
                With small business loans up to Rs. 30 lakh, funding for your small business is now just 24 hours away. Use the funds to invest in infrastructure, expand operations, upgrade to the latest plant and machinery, maintain inventory, or to increase working capital. These customized loans can give your business the much-needed boost to help your enterprise scale new heights with enhanced competitiveness and profitability. </p>
              
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
 
export default BusinessLoan;