import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome'

class VehicleLoan extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='LoanApplication'>
                <Welcome />
            <br/>
            <br/>
            <div className='loginUser'>
                <br />
                <h1>PNG Bank <b>Automobile Loan</b></h1>
                <br/>
                <p>Dreaming of owning a car? The Axis Bank Car Loan aims to ensures that you drive around the city in your own vehicle! Avail a car loan, or opt for a pre-approved car loan, and get the best interest rates. Axis Bank’s New Car Loan offers car loans from Rs. 1 Lakh upto 100% on-road price along with benefits. Before applying for a car loan online, make sure to use the car loan calculator to find out your EMI. Apply for an Axis Bank New Car Loan and make your dream of owning a car come true.</p>
               
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
 
export default VehicleLoan;