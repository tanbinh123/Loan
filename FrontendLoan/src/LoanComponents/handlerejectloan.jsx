import React, { Component } from 'react';
import WelcomeM from './WelcomeM';
import AuthService from './AuthService'
import loanAppDataService from './api/loanAppDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';


class handlerejectloan extends Component {
    constructor(props){
        super(props)
        this.state = { 
            loans:[],
            message:'',
            loanId: this.props.match.params.loanId,
            
            nameManager: AuthService.getUserLogged(),
            comments:''

         }
         this.onSubmit = this.onSubmit.bind(this);
         this.validate = this.validate.bind(this);
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

    onSubmit(values){
       
        let user = AuthService.getUserLogged();
       
     
        let check = window.confirm(`Are you sure you want to reject the loan with loan id: ${this.state.loanId}  `)
        {
            if(check)
            {

                let loannumber = this.state.loanId;
            loanAppDataService.rejectLoan(loannumber)
            .then ( () =>{
                    alert('Loan Rejected Successfully');
                    this.props.history.push('/login/manager/pendingloans'); 
            })
            }
            else{
                alert('Rejection Cancelled');
                this.props.history.push('/login/manager/pendingloans')
            }
        }
    }


    validate(values)
    {
        let errors= {}
        if(!values.comments)
        {
            errors.comments='Comment Section Cannot be Empty'
        }
       
        return errors;
    }
    render() { 
        let {loanId, nameManager, comments} = this.state
        return ( 
            <div className='LoanApplication'>
                <WelcomeM />
                <br/>
                <br/>
                <div className='loginUser'>
              
                <h4><u><b>Loan ID: {this.props.match.params.loanId}</b></u></h4>
     
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
                <Formik initialValues={{
                             loanId, nameManager, comments}}
                             onSubmit={this.onSubmit}
                            validateOnChange={true}
                            validateOnBlur ={true}
                             validate={this.validate}
                             enableReinitialize ={true}
                             >
                            
                            {
                                (props)=> (
                                    <Form >
                                      
                                        <fieldset className='form-group'>
                                            <label><h6><b>Loan Number</b></h6></label>
                                            <Field disabled = 'disabled' className='form-control' type = 'text' name ='loanId'></Field>
                                        </fieldset>
                                       
                                       
                                        <fieldset className='form-group'>
                                            <label><h6><b>Name of the Manager</b></h6></label>
                                            <Field disabled='disabled' className='form-control' type = 'text' name ='nameManager'></Field>
                                        </fieldset> 
                                        <fieldset className='form-group'>
                                            <label><h6><b>Reason for Rejection</b></h6></label>
                                            <Field className='form-control' type = 'text' name ='comments'></Field>
                                        </fieldset> 
                                        <h5><i><ErrorMessage name='comments' component ='div' 
                                                        className='alert alert-warning'></ErrorMessage></i></h5>
                                        <button className='btn btn-dark btn-lg' type='submit'>Save</button>
                                    </Form>
                                )
                            }
                        </Formik>



                </div>
            </div>
         );
    }
}
 
export default handlerejectloan;