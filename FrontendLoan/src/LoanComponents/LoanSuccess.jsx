import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'

class LoanSuccess extends Component {
    state = {  }
    render() { 
        return (  
                <div className='LoanApplication'>
                    <Welcome/>
                    <br/>
                <br/>
            <div className='loginUser container'>
                <h2><b>
                    <br/>
                    Loan <b>Applied </b>Successfully</b>
                </h2>
                <br/>
               
                <p> <span class="tab"></span> <span class="tab"></span>
                    Thankyou for applying a loan in the bank of <b>PNG</b>. HAPPY BANKING..
                </p>
               
                <br/>
                <br/>
                <br/>
                <div className='loginbut'>

                
                <Link className='linkWelcome' to='/login'>
                    <button className='btn btn-dark btn-lg'> Previous</button>
                </Link>
                </div>
                </div>
            </div>
        );
    }
}
 
export default LoanSuccess;