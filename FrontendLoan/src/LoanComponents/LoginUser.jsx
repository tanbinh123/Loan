import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from './api/HelloWorldService.js'
import Welcome from './Welcome'
import AuthService from './AuthService.js';

class LoginUser extends Component {
    constructor(props)
    {
        super(props);
        }
    state = { 
        loan: 'select',
        valueforform: '/login',
        message:''
   
        
     }


     handleLoanChange= (event) =>
     {
         this.setState({
             loan: event.target.value
         })
         
     }
     handleClick = event =>
     {

         //console.log(this.state.loan)
         if(this.state.loan === 'select')
         {
             console.log(this.state.loan)
             this.state.valueforform= '/login'
             this.setState({
                 message: 'Please enter loan type'
             })
             console.log(this.state.valueforform)
         }
         
         else{
             this.setState({
                valueforform: '/'+ this.state.loan +'loan'
            },
            () => {
                console.log(this.state.valueforform);
                {/*this.props.history.push(this.state.valueforform,{detail: this.props.location.state.detail})*/}
                window.location.href = this.state.valueforform;            }
            )}
            event.preventDefault();
        
     }

    render() {
         
        return ( 
           
            <div className='LoanApplication'>
                 <Welcome />
              <br/>
              <br/>
                <div className='loginUser'>
              
          <h1 >PNG Bank <b>Loans</b></h1> 
                    <br/>
                    <br/>
                    <p>In finance, a loan is the lending of money by one or more individuals, organizations, or other entities to other individuals, organizations etc. The recipient (i.e., the borrower) incurs a debt and is usually liable to pay interest on that debt until it is repaid as well as to repay the principal amount borrowed.

The document evidencing the debt (e.g., a promissory note) will normally specify, among other things, the principal amount of money borrowed, the interest rate the lender is charging, and the date of repayment. A loan entails the reallocation of the subject asset(s) for a period of time, between the lender and the borrower.

The interest provides an incentive for the lender to engage in the loan. In a legal loan, each of these obligations and restrictions is enforced by contract, which can also place the borrower under additional restrictions known as loan covenants.</p>
               <div className='loginbut'>
                    
                    <span className="tab"></span>
                    <Link className='linkWelcome' to='/login/checkstatus'>
                        <button className='btn btn-dark btn-lg '>Check Status</button>
                    </Link>
                    <span className="tab"></span>
                    <Link className='linkWelcome' to='/login/cancelloan'>
                        <button className='btn btn-dark btn-lg '>Update/Modify</button>
                    </Link>
                    <span className="tab"></span>
                    <select 
                    value = {this.state.loan} 
                    
                    onChange= {this.handleLoanChange}>
                        <option value='select'>Select Loan Type</option>
                        <option value='home'>Home Loan</option>
                        <option value='business'>Business Loan</option>
                        <option value='student'>Education Loan</option>
                        <option value='personal'>Personal Loan</option>
                        <option value='automobile'>Automobile Loan</option>
                    </select>
                   
                        <button className='btn btn-dark btn-lg ' onClick={(e) => this.handleClick(e)} >Explore more</button>
              
                    <br/>
                    <div><h5><i>{this.state.message}</i></h5></div>
                   </div>

                    </div>

            </div>
         );
    }
}
 
export default LoginUser;