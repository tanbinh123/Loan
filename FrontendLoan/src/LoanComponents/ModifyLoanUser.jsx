import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loanAppDataService from './api/loanAppDataService'
import AuthService from './AuthService';

class ModifyLoanUser extends Component {
    constructor(props)
    {
        super(props);

        this.state={
            loanId: this.props.match.params.id,
            address:'',
            amount:'',
            email:'',
            username:'',
            loanType:'',
            monthlySalary:'',
            phoneNo: '',
            status:'pending',
            aadhar:'',
            pan:'poi98877'
      
        
            
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    //geeting the actual values to the form
    componentDidMount(){
        let user = AuthService.getUserLogged();
        loanAppDataService.findLoanByID(user, this.props.match.params.loanId)
        .then(response =>{
            this.setState({
                loanId: response.data.loanId,
                username : response.data.username,
                pan : response.data.pan,
                aadhar: response.data.aadhar,
                monthlySalary :response.data.monthlySalary ,
                amount : response.data.amount,
                address : response.data.address,
                email : response.data.email,
                phoneNo : response.data.phoneNo,
                loanType : response.data.loanType,
                amount : response.data.amount,
                status: response.data.status
    
            })
        }

         
        )
    }

    //onsubmit the updated values
    onSubmit(values){
        let user = AuthService.getUserLogged();
 
        let check = window.confirm('Are you sure you want to update by the given values')
        if(check){
            loanAppDataService.updateLoan(user, this.props.match.params.loanId, {
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
            alert('Loan Form updated Successfully');
            this.props.history.push('/login/cancelloan');

        })
        }
        else{
            this.props.history.push(`/login/updateloan/${this.state.loanId}`);
        }
    }

    validate(values)
    {
        console.log('In va;lidare');
        console.log(values);
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
                    <h2>Update| <b>Loan ID {this.props.match.params.loanId}</b></h2>
                    <div className='container'>
                        <br/>
                        <br/>
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
                                        <ErrorMessage name='address' component ='div' 
                                                        className='alert alert-warning'></ErrorMessage>
                                        <fieldset className='form-group'>
                                            <label><b>Name of Applicant</b></label>
                                            <Field disabled = "disabled" className="form-control" type = 'text' name ='username' ></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><b>Pan Details</b></label>
                                            <Field className='form-control' type = 'text' name ='pan'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><b>Addhar Details</b></label>
                                            <Field className='form-control' type = 'number' name ='aadhar'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><b>Monthly Salary</b></label>
                                            <Field className='form-control' type = 'number' name ='monthlySalary'></Field>
                                        </fieldset>
                                        <fieldset className='form-group' >
                                            <label><b>Amount of Loan</b></label>
                                            <Field className='form-control' type = 'number' name ='amount'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><b>Address</b></label>
                                            <Field className='form-control' type = 'text' name ='address'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><b>Email</b></label>
                                            <Field className='form-control' type = 'email' name ='email'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><b>Contact No.</b></label>
                                            <Field className='form-control' type = 'number' name ='phoneNo'></Field>
                                        </fieldset> 
                                        <fieldset className='form-group'>
                                            <label>Loan Type</label>
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
                                        <Link className='linkWelcome' to='/login/cancelloan'>
                                            <button className='btn btn-dark btn-lg' align='left'> Previous</button>
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
 
export default ModifyLoanUser;