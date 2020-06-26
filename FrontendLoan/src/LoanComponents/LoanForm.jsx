import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loanAppDataService from './api/loanAppDataService'
import AuthService from './AuthService';

class loanForm extends Component {
    constructor(props)
    {
        super(props);
        console.log("asdasdasd",props)
        this.state={
            loanId: 0,
            address:'',
            amount:'',
            email:'',
            username:'',
            loanType:'',
            monthlySalary:'',
            phoneNo: '',
            status:'pending',
            aadhar:'',
            pan:''
        }
        let user = AuthService.getUserLogged();
        loanAppDataService.retrieveUserFromUsername(user)
        .then(response => {
                this.setState({
                    username: response.data.name,
                    email: response.data.email,
                    phoneNo: response.data.number

                })
                console.log('constructor');
                console.log(response);
        })
        
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
 

    //onsubmit the updated values
    onSubmit(values){
        let user = AuthService.getUserLogged();
        console.log(values)
        let check = window.confirm('Are you sure you want to apply for the loan with the given details')
        {
            if(check)
            {
                loanAppDataService.addLoan(user,  {
                    loanId: this.state.loanId   , 
                    username : values.username,
                    address:values.address,
                    pan :values.pan ,
                    aadhar : values.aadhar,
                    monthlySalary : values.monthlySalary,
                    amount : values.amount,
                    loanType :values.loanType,
                    email :values.email,
                    phoneNo :values.phoneNo,
                    status: this.state.status
            }).then ( () =>{
                    alert('Loan Applied Successfully');
                    this.props.history.push('/login'); 
            })
            }
            else{
                alert('Loan Cancelled');
                this.props.history.push('/login/loanform/-1')
            }
        }
        
        
    }

    validate(values)
    {
        console.log('In va;lidare');
        let errors= {}
        if(!values.username || !values.pan || !values.aadhar || !values.monthlySalary || !values.amount || !values.address || !values.email || !values.phoneNo || !values.loanType)
        {
            errors.username='Fields Cannot Be Empty'
        }
        else if(!(/^[a-zA-Z ]*$/.test(values.username)))
        {
            errors.username = 'Incorrect Name'
        }
        else if(!(/^[a-zA-Z0-9 ]*$/).test(values.pan))
        {
            errors.username = 'Incorect Pan Number'
        }
        else if(!(/^[0-9]{12}$/).test(values.aadhar))
        {
            errors.username = 'Invalid Aadhar Number'
        }
        else if(!(/^\d{1,8}(?:\.\d{0,2})?$/).test(values.monthlySalary))
        {
            errors.username = 'Invalid Salary'
        }
        else if(!(/^[0-9]{1,8}$/).test(values.amount))
        {
            errors.username = 'Invalid Amount for loan'
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email))
        {
            errors.username = 'Incorrect Email'
        }
        else if(!(/\+?\d[\d -]{8,12}\d/.test(values.phoneNo)))
        {
            errors.username='Invalid Contact No.'
        }
        return errors;
    }
    render() { 
        let { address, amount, email, username, loanType, monthlySalary, phoneNo, aadhar, pan} = this.state
        return (
            <div className='LoanApplication'>
                <Welcome />
                <br/>
                <br/>
                <div className='loanform'>
                    <h1><b><u>Loan Form</u></b></h1>
                    <br/>
                    <br/>
                    <div className='container'>
                        <Formik initialValues={{
                             address, amount, email, username, loanType, monthlySalary, phoneNo, aadhar, pan}}
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
                                            <label><h5><b>Name of Applicant</b></h5></label>
                                            <Field disabled = 'disabled' className="form-control" type = 'text' name ='username'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Pan Details</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='pan'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Addhar Details</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='aadhar'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Monthly Salary</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='monthlySalary'></Field>
                                        </fieldset>
                                        <fieldset className='form-group' >
                                            <label><h5><b>Amount of Loan</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='amount'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Address</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='address'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Email</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='email'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Contact No.</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='phoneNo'></Field>
                                        </fieldset> 
                                        {/* <fieldset className='form-group'>
                                            <label><b>Status</b></label>
                                            <Field className='form-control' type = 'text' name ='status'></Field>
                                        </fieldset>  */}
                                        {/* <fieldset className='form-group'>
                                            <label><b>LoanNo</b></label>
                                            <Field className='form-control' type = 'text' name ='loanId'></Field>
                                        </fieldset>  */}
                                        <fieldset className='form-group'>
                                            <label><h5><b>Loan Type</b></h5></label>
                                            <Field className='form-control' as='select' name ='loanType'>
                                                <option value='select'>Select</option>
                                                <option value='automobile'>Automobile Loan</option>
                                                <option value='business'>Business Loan</option>
                                                <option value='education'>Educational Loan</option>
                                                <option value='home'>Home Loan</option>
                                                
                                                <option value='personal'>Personal Loan</option>
                                                
                                              
                                         
                                            </Field>
                                        </fieldset>
                                        <h5><i><ErrorMessage name='username' component ='div' 
                                                        className='alert alert-warning'></ErrorMessage></i></h5>
                                        <br/>
                                        <br/>
                                        
                                        {/* <fieldset className='form-group'>
                                            <label>Date</label>
                                            <Field className='form-control' type = 'date' name ='daate'></Field>
                                        </fieldset> */}
                                         <Link className='linkWelcome' to='/login'>
                                            <button className='btn btn-dark btn-lg '> Previous</button>
                                        </Link>
                                        <span className="tab"></span>
                                        <button className='btn btn-dark btn-lg' type='submit'>Save</button>
                                        
                                    </Form>
                                )
                            }
                        </Formik>

                    </div>
                
                </div>

                
            </div>
          );
    }
}
 
export default loanForm;