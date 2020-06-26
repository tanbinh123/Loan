import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './StyleSheets.css'
import loanAppDataService from './api/loanAppDataService'
import LoginManager from './WelcomeLoginManager'
import WelcomeM from './WelcomeM'
import AuthService from './AuthService'

class ApprovedLoans extends Component {
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
        loanAppDataService.retriveLoanForManager(username)
        .then(response =>{
             console.log('in here')
             for(let i=0;i<response.data.length;i++){
                if(response.data[i].status === 'approved')
               {this.setState({
                  
                   loans:[...this.state.loans,response.data[i]],
                   message: ''
               })}
            }
             console.log(this.state.loans) 
             console.log('Inder Khandelwal')
             console.log(response)
            console.log(response.data.status)
        })
        console.log('hello', this.state.loans)
    }
    render() { 
        return (  
            <div className='LoanApplication'>
                <WelcomeM />
                <br/>
                <br/>
                <div className='loginUser'>
                

                <h2><b>Approved </b>Loans</h2>
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
                <br/>
                <br/>
                <div className='loginbut'></div>
                
                
                <Link className='linkWelcome' to='/login/manager'>
                    <button className='btn btn-dark btn-lg'>Previous</button>
                </Link>
                </div>
                
             

            </div>
        );
    }
}
 
export default ApprovedLoans;