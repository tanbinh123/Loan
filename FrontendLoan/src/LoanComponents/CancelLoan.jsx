import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import loanAppDataService from './api/loanAppDataService'
import Welcome from './Welcome'
import AuthService from './AuthService';
class CancelLoan extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loans:[
              //  {id:1, address:'panagarh', downpayment:10000, email:'puja.khandelwal@gmail.com', employeer:'puja', loantype :'homeloan', monthlysalary:12000, phonenumber:9090909081, status:'pending'}
            ],
            message:'',
            messagedelete:''
         }
         this.handleDeletLoan = this.handleDeletLoan.bind(this);
         this.handleModifyLoan = this.handleModifyLoan.bind(this);
         this.refreshLoans = this.refreshLoans.bind(this);
        }


   
        //refreshing it everytime
    componentDidMount()
    {
        this.refreshLoans();
        
    }

    //adding the loans in the chech status
    refreshLoans() {
        let username = AuthService.getUserLogged();
        loanAppDataService.retriveLoanForUsername(username)
        .then(response =>{
             console.log('in here')
               this.setState({
                   loans: response.data
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
    }
    //delete loan applied by user
    handleDeletLoan(loanId)
    {
        let username= AuthService.getUserLogged();
        let check =window.confirm(`Are you sure you want to delete the loan applied. Loan loanId: ${loanId}`)
        if(check)
        {
            
        loanAppDataService.deleteLoanByID(username,loanId)
        .then(response =>{
            this.setState({
                messagedelete:`Loan applied for ${loanId} ID successfully deleted`
               
            });
            this.refreshLoans();

            }
        )
        }
       

    }
    //update/modify loan applies by user
    handleModifyLoan(loanId)
    {
    
        this.props.history.push(`/login/updateloan/${loanId}`)
        
    }



    render() { 
        return ( 
            <div className='LoanApplication'>
                <Welcome />
                <br/>
                <br/>
                <div className='loginUser'>
             
                <h2><u>Update/Cancel <b>Loan</b> Applied</u></h2>
        {this.state.messagedelete && <div className='alert alert-success'>{this.state.messagedelete}</div>}
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
                            <th><h4><b>Update</b></h4></th>
                            <th><h4><b>Delete</b></h4></th>
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
                                     {loan.status ==='pending' && <td><button class="btn btn-success" onClick={() => this.handleModifyLoan(loan.loanId)}>Update</button></td>}
                                     {loan.status ==='pending' && <td><button class="btn btn-danger" onClick={() => this.handleDeletLoan(loan.loanId)}>Cancel</button></td>}
                                 
                                 </tr>
                             )
                        }
                    </tbody>
                </table>
                     
                <Link className='linkWelcome' to='/login'>
                    <button className='btn btn-dark btn-lg' align='left'> Previous</button>
                </Link>
                    <h5>{this.state.message}</h5>
                <br/>
                <br/>
                <div className='loginbut'>

                
               
                </div>
            </div>
            </div>
         );
    }
}
 
export default CancelLoan;