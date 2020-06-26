import React, { Component } from 'react';
import Welcome from './Welcome'
import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom';
import LoginUser from './LoginUser';
import loanAppDataService from './api/loanAppDataService'
import AuthServive from './AuthService.js';



class WelcomeSignin extends Component {
    state = { 
        username: '',
        password: '',
        isFailed: false,
        message:'Fields cannot be empty'
     }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit= event => {
        if(this.state.username === '' || this.state.password === '')
        {
            this.setState({ isFailed: true}, () => { console.log(this.state.isFailed)})
            
        }
        else if(this.state.password.length < 5 || this.state.password > 15)
        {
            this.setState({ 
                isFailed: true,
                message:'Incorrect Password'
                })  
        }
    
        else
        {
            if(this.state.username === 'PujaKhandelwal' && this.state.password === 'PujaK@1234')
            {
                console.log('In if');
                AuthServive.successfulLogin(this.state.username, this.state.password);
                this.props.history.push('/login/manager');
                this.setState({ isFailed: false})
            }
            else{

            
            loanAppDataService.isUser(this.state.username, this.state.password)
            .then(response => {
                console.log(response);
               
                if(response.data)
                {
                    console.log('In elseif');
                    AuthServive.successfulLogin(this.state.username, this.state.password);
                    this.props.history.push('/login');
                    this.setState({ isFailed: false})
                }
                else{
                    this.setState({ isFailed: true,
                        message:'Invalid Credentials'})
                }

            })
        }



        }
     
        
        event.preventDefault()
    }

    render() { 
        
        return (  
            <div className='LoanApplication'>
                <Welcome />
                <br/>
                <br/>
                <br/>
             
               
            <div  align='center' className="example1" >
                
            
                <h1> <b><u>SIGN IN</u></b></h1>
             
             
                
                <br />
                  <br />
               
                <form >
                <div className='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                    <input 
                                    type ='text ' 
                                    name='username'
                                    class='form-control'
                                    placeholder='UserName'
                                    value= {this.state.username} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                                
 
                        </div>
                        </div>
                        <div class='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                                <input 
                                    type ='password' 
                                    name='password'
                                    class='form-control'
                                    placeholder='Password'
                                    value= {this.state.password} 
                                    onChange= {this.handleChange}
                                    required
                                    size="50"
                                />
                               </div>
                               </div>
                               <div class='form-row'>
                            <div className='form-group form-group-sm col-md-4'>
                                {this.state.isFailed && <div><h5><i>{this.state.message}</i></h5></div>}
                                <br/>  
                                <button className="btn btn-dark btn-lg" onClick={this.handleSubmit} >LogIn</button>

                          </div>
                          </div>

                        <br/>
                        <h4>Not a member?</h4>   
                        <Link className='btn btn-link' to='/register'>
                            <h4>Register</h4>
                        </Link>                      
                    </form>
                <br/>
                </div>
                </div>
          
          
            
           
        );
    }
}



 
export default WelcomeSignin;