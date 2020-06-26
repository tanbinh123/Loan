
import React, { Component } from 'react';
import './StyleSheets.css'
import {Link} from 'react-router-dom';
import Bar from './bar'
import AuthService from './AuthService';
import {withRouter } from 'react-router';

class WelcomeM extends Component {
    state = {  }
    render() { 
        const isUserLoggedIn = AuthService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return ( 
            <div>
            <nav>
                <Link className='linkWelcome'  to='/'>
                    <h1>PNG</h1>
                </Link>
                <ul className='nav-links'>
                    <li><Link className='linkWelcome'  to='/about'>
                       About Us
                    </Link></li>
                    {!isUserLoggedIn && <li><Link className='linkWelcome' to='/signin'>
                        Sign In
                    </Link></li>}
                    {!isUserLoggedIn && <li><Link className='linkWelcome' to='/register'>
                        Register
                    </Link></li> } 
                    {isUserLoggedIn &&  <li><Link className='linkWelcome' to='/login/manager'>
                        Home
                    </Link></li> } 
                    {isUserLoggedIn && <li><Link className='linkWelcome' to='/logout' onClick={AuthService.logout}>
                        Logout
                    </Link></li> } 
                </ul>
            </nav>
        </div>
         );
    }
}
 
export default withRouter(WelcomeM) ;



        
        
       

