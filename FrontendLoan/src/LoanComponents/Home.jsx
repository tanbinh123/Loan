import React, { Component } from 'react';
import Welcome from './Welcome';

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div className='LoanApplication'>
                <Welcome />
                <br/>
                <br/>
                <br/>
                <div className='example1 '>
                    <h1><b>We're here for your service</b></h1>
                    <br/>
                    <br/>
                    <h6>A bank is a financial institution that accepts deposits and recurring accounts from the people and creates Demand Deposit.</h6><br/>
                    <h6>A loan is when money is given to another party in exchange for repayment of the loan principal amount plus interest.</h6><br/>
                    <h6>Loan terms are agreed to by each party before any money is advanced.</h6><br/>
                    <h6>A loan may be secured by collateral such as a mortgage or it may be unsecured such as a credit card.</h6><br/>
                    <h6>Revolving loans or lines can be spent, repaid, and spent again, while term loans are fixed-rate, fixed-payment loans.</h6><br/>
                    
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

               

                <div className='home'>
                    <p>Home Loan  </p>
                    <p>Personal Loan | </p>
                    <p>Vehicle Loan | </p>
                    <p>Education Loan | </p>
                    <p>Business Loan | </p>
                    
                </div>
                
                
            </div>
         );
    }
}
 
export default Home;