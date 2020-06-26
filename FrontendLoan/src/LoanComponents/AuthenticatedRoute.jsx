import React, { Component } from 'react';
import AuthService from './AuthService.js';
import {Route, Redirect} from 'react-router-dom'

//
class AuthenticatedRoute extends Component {
    state = {  }
    render() { 
        if(AuthService.isUserLoggedIn())
        {
            return <Route {...this.props}/>
        }
        else
        {
            return <Redirect to='/signin'/>
        }
        
    }
}
 
export default AuthenticatedRoute;