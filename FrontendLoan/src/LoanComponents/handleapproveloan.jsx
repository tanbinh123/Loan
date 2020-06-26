import React, { Component } from 'react';
import WelcomeM from './WelcomeM';
import AuthService from './AuthService'
import loanAppDataService from './api/loanAppDataService'


class handleapproveloan extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loans:[]
               ,
            message:'',
            loanId: this.props.match.params.loanId
         }
         this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        

        let user = AuthService.getUserLogged();
        loanAppDataService.findLoanByIDManager(user, this.props.match.params.loanId)
        .then(response =>{
             console.log('in here')
               this.setState({
                   loans:[response.data]
               })
             console.log(this.state.loans) 
            console.log(response)
        })
        console.log('hello', this.state.loans)
        
    }

    onSubmit()
    { 
        let check = window.confirm(`Are you sure you want to approve the loan with loan id: ${this.state.loanId}  `)
        {
            if(check)
            {
        

                let loannumber = this.state.loanId;
           
            loanAppDataService.approveLoan(loannumber)
            .then ( () =>{
                    alert('Loan Approved Successfully');
                    this.props.history.push('/login/manager/pendingloans'); 
            })
            }
            else{
                alert('Loan Approval Cancelled');
                this.props.history.push('/login/manager/pendingloans')
            }
        }
    }
    render() { 
        return ( 
            <div className='LoanApplication'>
                <WelcomeM />
                <br/>
                <br/>
                <div className='loginUser'>
                    <br/>
                <h4>Loan ID: {this.props.match.params.loanId}</h4>
               <br/>
               <table className='table'>
                    <thead>
                        <tr>
                        <th><h4>Loan Id</h4></th>
                            <th><h4>Name of Applicant</h4></th>
                            <th><h4>Pan Details</h4></th>
                            <th><h4>Aadhar Details</h4></th>
                            <th><h4>Monthly Salary</h4></th>
                            <th><h4>Amount of Loan</h4></th>
                            <th><h4>Loan Type</h4></th>
                            <th><h4>Address</h4></th>
                            <th><h4>Email</h4></th>
                            <th><h4>Contact No.</h4></th>
                            <th><h4>Status</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.loans &&
                             this.state.loans.map(
                                 loan =>
                                 <tr>
                                      <td><h5>{loan.loanId}</h5></td>
                                     <td><h5>{loan.username}</h5></td>
                                     <td><h5>{loan.pan}</h5></td>
                                     <td><h5>{loan.aadhar}</h5></td>
                                     <td><h5>{loan.monthlySalary}</h5></td>
                                     <td><h5>{loan.amount}</h5></td>
                                     <td><h5>{loan.loanType}</h5></td>
                                     <td><h5>{loan.address}</h5></td>
                                     <td><h5>{loan.email}</h5></td>
                                     <td><h5>{loan.phoneNo}</h5></td>
                                     <td><h5>{loan.status}</h5></td>
                                      </tr>
                             )
                        }
                    </tbody>
                </table>

                <button className='btn btn-success' type='submit' onClick={this.onSubmit}><b>Approve</b></button>



                </div>
            </div>
         );
    }
}
 
export default handleapproveloan;