import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ApprovedLoans from './approvedloans'
import WelcomeM from './WelcomeM'

class LoginManager extends Component {
    constructor(props)
    {
        super(props);
        console.log(props);
    }
    state = { 
     }

   
     
    render() { 
        return ( 
            <div className='LoanApplication'>
                <WelcomeM />
                <br/>
                <br/>
                <div className='loginUser'>
            
          <h1>Loan <b>Manage {/*{this.props.location.state.detail}*/}</b></h1> 
          {/* <h6>Welcome <b>{this.props.match.params.name}</b></h6> */}
          <br/>
          <br/>
          <h4>
              Here comes your loan management system. Being a manager you can approve or reject loans applies by the customer of our bank.
              
          </h4>
                
                <br/><br/>
                <br/>
                <div className='loginbut'>

                    <Link className='linkWelcome' to='/login/manager/aprovedloans'>
                        <button className='btn btn-dark btn-lg '>Approved</button>
                    </Link>
                    <span class="tab"></span>
                    <Link className='linkWelcome' to='/login/manager/rejectedloans'>
                        <button className='btn btn-dark btn-lg '>Rejected</button>
                    </Link>
                    <span class="tab"></span>
                    <Link className='linkWelcome' to='/login/manager/pendingloans'>
                        <button className='btn btn-dark btn-lg '>Pending</button>
                    </Link>
                    </div>
                    </div>

            </div>
         );
    }
}
 
export default LoginManager;