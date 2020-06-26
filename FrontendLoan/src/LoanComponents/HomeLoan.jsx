import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome'
class HomeLoan extends Component {
    
    state = {  }
    
    render() { 
        return (
            <div className='LoanApplication'>
                <Welcome />
                <br/>
                <br/>
                <div className='loginUser'>
                    <br />
                <h1>PNG Bank <b>Home Loans</b>  </h1>
                <br/>
                <p> Home loan is generally taken either to buy flat/house, construction of house or renovation.
                    Eligibility generally depend on repayment capacity and property price
                    Generally builders sell projects under time linked plans (TLP), construction linked plan (CLP), subvention schemes.
                    Most banks fund projects only under CLP. 
                    Some housing finance companies fund projects under TLP and subvention schemes as well
                    Home loans are usually sanctioned for maximum long tenure of 30 years.
                    It is observed that the average period people take to pay off their home mortgage fully is around 8 years.
                    As per RBI circulars, banks are not allowed to charge prepayment penalty or charges on floating rate home loans. 
                    However, banks may charge penalty on prepayment of fixed rate loans. 
                    Charges may vary from 1 % to up to 3% of the loan amount.</p>
                    <div className='loginbut'>
             

                
                <Link className='linkWelcome' to='/login'>
                    <button className='btn btn-dark btn-lg' > Previous</button>
                </Link>
                <span class="tab"></span>
                
                <Link className='linkWelcome' to='/login/loanform/-1'>
                    <button className='btn btn-dark btn-lg' >Get Form</button>
                </Link> 
            </div>
            </div>
            </div>
          );
    }
}
 
export default HomeLoan;