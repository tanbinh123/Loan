import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Welcome from './Welcome'

class StudentLoan extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='LoanApplication'>
                <Welcome />
                <br/>
            <br/>
            <div className='loginUser'>
              <br/>
                <h1>PNB Bank <b>Education Loan</b></h1>
                <br/>
                <p>
                There is no doubt about the importance of education these days. Be it school education or college education, it serves as a stepping stool for you to achieve your dreams. Whether it is college education or post graduation, don’t let high tuition fees hamper your growth. Getting an education loan is an easy way to finance your dreams. A student loan can help you get into the university of your choice. The Government’s push on education means you can avail education loan subsidy, and you also get tax benefits for interest paid under Section 80E of the Income Tax Act. Bank of Baroda offers you different types of education loans in India to fulfill your dreams. Most of these student loans in India have a repayment period of 10-15 years and a moratorium of the course period and the specified number of months. All education loans do not need a security for a loan up to Rs. 4 lakhs.
                </p>
                <div className='loginbut'>
               
               
                <Link className='linkWelcome' to='/login'>
                    <button className='btn btn-dark btn-lg'> Previous</button>
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
 
export default StudentLoan;