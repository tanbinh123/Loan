import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loanAppDataService from './api/loanAppDataService'
import AuthService from './AuthService';


class RegisterPage extends Component {

    constructor(props)
    {
        super(props)
        this.state ={
            name: '',
      
            dob: '',
            email: '',
            number: '',
      
            acctype: 'select',
            dateError :'',
            username: '',
            usernameError:'',
            password: '',
            isUsername: false,
            datecheck: true
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

        //onsubmit the updated values
        onSubmit(values){
            this.setState({usernameError:''})  
                loanAppDataService.existusername(values.username)
                .then(response => {
                    const userCheck = response.data;
                  
                        if(!userCheck){  
                              
                            let check = window.confirm('Are you sure you want to register with the given details')
                            {
                                if(check)
                                {
                                    loanAppDataService.addUser( {
                                        name: values.name,
                                        
                                      
                                        dob: values.dob,
                                        email:values.email,
                                        number: values.number,
                                     
                                        acctype: values.acctype,
                                   
                                        username: values.username,
                                        password: values.password
                                }).then ( () =>{
                                        alert(`Registered Successfully`);
                                        this.props.history.push('/signin'); 
                                })
                                }
                                else{
                                     this.props.history.push('/register'); }
                        }
                        }else{
                            this.setState({
                                usernameError:'Username Already Taken'
                            })
                        }
                        return false;
                   // }
                })
                
        
                
            
            
        }
    
        validate(values)
        {
            let errors= {}
            if(!values.name || !values.password || !values.username || !values.dob || !values.email || !values.number || !values.acctype)
            {
                console.log(values.data);
                errors.name='Fields Cannot Be Empty'
            }
            else if(!(/^[a-zA-Z ]*$/.test(values.name)))
            {
                errors.name = 'Incorrect Name'
            }
            // else if(!(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(values.dob)))
            // {
            //     errors.name = 'Incorrect date format |mm/dd/yyyy|'
            // }
            // else if(values.dob)
            // {
            //     console.log(values.dob)
            //     console.log((/^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/.test(values.dob)));
            //     if((/^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/.test(values.dob)))
            //     {
            //         let currentdate = new Date();
            //         let currentyear = currentdate.getFullYear();
            //         let currentmonth = currentdate.getMonth();
            //         let currentday = currentdate.getDate();

            //         let dobyear = values.dob.getFullYear();
            //         let dobmonth = values.dob.getMonth();
            //         let dobdate = values.dob.getDate();
                    
            //         let year = currentyear-dobyear;
            //         let month = currentmonth - dobmonth;
            //         let date = currentday - dobdate;
                    
            //         if((year === 18 && month <= 0 && date <=0) || year < 18 )
            //         {
            //             errors.name='Have to be 18+'
            //         }
            //     }
            //     else{
            //         errors.name = 'Incorrect Date(mm/dd/yyy && Should be born in year 19|20)'
            //     }
                
            // }

            else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email))
            {
                errors.name = 'Incorrect Email'
            }
            else if(!(/\+?\d[\d -]{8,12}\d/.test(values.number)))
            {
                errors.name='Invalid Contact No.'
            }
            else if(!(/^[a-zA-Z0-9_]*$/).test(values.username))
            {
                errors.name='Username can only contain |A-Z|a-z|_|0-9|)'
            }
           
            else if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(values.password))
            {
                errors.name = 'Password should contain any one from each section |A-Z|a-z|0-9|!@#$%^&*| with a length between (6-16)'
            }
            return errors;
        }


    

    render() { 
        
        let {name,  dob, email, number,  acctype,  username, password} = this.state
        return (
            <div className='LoanApplication'>
                <Welcome />
                <br/>
                <br/>
                <br/>
                <div className='example2'>
                    <h2> <b><u>Register Page</u></b></h2>
                    <br/>
                    <br/>
                    <div>
                        <Formik initialValues={{
                             name,  dob, email, number, acctype, username, password}}
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
                                            <Field className="form-control" type = 'text' name ='name'></Field>
                               
                                        </fieldset>
                                       
                                        <fieldset className='form-group'>
                                            <label><h5><b>Date Of Birth</b></h5></label>
                                            <Field className='form-control' type = 'date' name ='dob' maxlength = '10'></Field>
                                        </fieldset>
                                        <fieldset className='form-group'>
                                            <label><h5><b>Email</b></h5></label>
                                            <Field className='form-control' type = 'email' name ='email'></Field>
                                        </fieldset>
                                        <fieldset className='form-group' >
                                            <label><h5><b>Contact No.</b></h5></label>
                                            <Field className='form-control' type = 'number' name ='number'></Field>
                                        </fieldset>
                                       
                                        <fieldset className='form-group'>
                                            <label><h5><b>Account Type</b></h5></label>
                                            <Field className='form-control' as='select' name ='acctype'>
                                                <option value='select'>Select</option>
                                                <option value='current'>Current</option>
                                                <option value='saving'>Saving</option>
                                            </Field>
                                        </fieldset>
                                       
                                     
                                        <fieldset className='form-group'>
                                            <label><h5><b>Username</b></h5></label>
                                            <Field className='form-control' type = 'text' name ='username'></Field>
                                        </fieldset> 
                                        <fieldset className='form-group'>
                                            <label><h5><b>Password</b></h5></label>
                                            <Field className='form-control' type = 'password' name ='password'></Field>
                                        </fieldset> 
                                        {this.state.usernameError && <h5><i>{this.state.usernameError}</i></h5>}
                                        {this.state.dateError && <h5><i>{this.state.dateError}</i></h5>}
                                        <h5><i><ErrorMessage name='name' component ='div' 
                                                        className='alert alert-warning'></ErrorMessage></i></h5>
                                 
                                                        <br/>
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
 
export default RegisterPage;