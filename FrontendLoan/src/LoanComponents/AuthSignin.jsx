import React, { Component } from 'react';
import AuthService from './AuthService.js';
import {Route, Redirect} from 'react-router-dom'


class AuthSignin extends Component {
    state = {  }
    render() { 
        if(AuthService.isUserLoggedIn())
        {
            return <Redirect to='/'/>
        }
        else
        {
            
            return <Route {...this.props}/>
        }
        
    }
}
 
export default AuthSignin;