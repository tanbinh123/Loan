import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Welcome from './Welcome'

class Profile extends Component {
    state = {  }
    render() { 
        return (  
            <div className='LoanApplication'>
                <Welcome/>
                <br/>
                <div className='example2'>
                    <br/>

                <h3><b>P</b>rofile</h3>
                <br/>
                
                
                <Link className='linkWelcome' to='/login'>
                    <button className='but'>Previous</button>
                </Link>
                </div>
                
             

            </div>
        );
    }
}
 
export default Profile;