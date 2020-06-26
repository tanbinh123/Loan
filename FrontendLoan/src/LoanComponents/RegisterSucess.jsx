import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterSucess extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='LoanApplication'>
                <br/>
            <div className='example2'>
                <h3 color= 'black'>
                    <br/>
                    Registered Successfully
                </h3>
                <br/>
                <p>
                    Thankyou for creating the account in the bank of <b>PNG</b>
                </p>
                <p>Happy Banking...</p>
                <br/>
                <br/>
                <br/>
                <Link className='linkWelcome' to='/signin'>
                    <button className='but' >Login</button>
                </Link>
                </div>
            </div>
         );
    }
}
 
export default RegisterSucess;