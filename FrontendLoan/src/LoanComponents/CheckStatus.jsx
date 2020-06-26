import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import loanAppDataService from './api/loanAppDataService'
import Welcome from './Welcome'
import AuthService from './AuthService';


class CheckStatus extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loans:[
             
            ],
            message:''
         }
    }
    
   

    componentDidMount()
    {
        let username = AuthService.getUserLogged();
        loanAppDataService.retriveLoanForUsername(username)
        .then(response =>{
             console.log('in here')
               this.setState({
                   
                    loans:response.data
                })
             console.log(this.state.loans) 
            console.log(response)
        })
        console.log('hello', this.state.loans)
        if(!this.state.loans)
        {
            this.setState({
                message:'No log to show'
            })
        }
       // .catch(error => errorGetLoan())
    }
    render() { 
       

        return ( 
            <div className='LoanApplication'>
                <Welcome/>
                <br/>
                <br/>
           <div className='loginUser'>
                <h2><b><u>Check Status</u></b></h2>
                <br/>
                <br/>
       
                
                <table className='table'>
                    <thead>
                        <tr>
                        <th><h5><b>Loan Id</b></h5></th>
                            <th><h5><b>Loan Applier</b></h5></th>
                            <th><h5><b>Pan Details</b></h5></th>
                            <th><h5><b>Aadhar Details</b></h5></th>
                            <th><h5><b>Monthly Salary</b></h5></th>
                            <th><h5><b>Amount of Loan</b></h5></th>
                            <th><h5><b>Loan Type</b></h5></th>
                            <th><h5><b>Address</b></h5></th>
                            <th><h5><b>Email</b></h5></th>
                            <th><h5><b>Contact No.</b></h5></th>
                            
                            <th><h4><b>Status</b></h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.loans &&
                             this.state.loans.map(
                                 loan =>
                                 <tr>
                                     <td><h5><i>{loan.loanId}</i></h5></td>
                                     <td><h5><i>{loan.username}</i></h5></td>
                                     <td><h5><i>{loan.pan}</i></h5></td>
                                     <td><h5><i>{loan.aadhar}</i></h5></td>
                                     <td><h5><i>{loan.monthlySalary}</i></h5></td>
                                     <td><h5><i>{loan.amount}</i></h5></td>
                                     <td><h5><i>{loan.loanType}</i></h5></td>
                                     <td><h5><i>{loan.address}</i></h5></td>
                                     <td><h5><i>{loan.email}</i></h5></td>
                                     <td><h5><i>{loan.phoneNo}</i></h5></td>
                                     
                                     <td><h5><i>{loan.status}</i></h5></td>
                                 </tr>
                             )
                        }
                    </tbody>
                </table>
                    <h5>{this.state.message}</h5>
              

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
 
export default CheckStatus;
