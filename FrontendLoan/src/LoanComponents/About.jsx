import React, { Component } from 'react';
import HelloWorldService from './api/HelloWorldService.js'
import Welcome from './Welcome';


class About extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            messagesp:''
        }
        this.getMessageResponse= this.getMessageResponse.bind(this);
    }
   
    getSpecialMessage= (event) =>
    {
        console.log('Special Message');
        HelloWorldService.executeHelloWorldBeanService()
        .then(response => this.getMessageResponse(response))
       
    }
    getMessageResponse(response){
        console.log(response);
        this.setState({
            messagesp: response.data.message
        })
    }

    
    render() { 
        return ( 
            <div className='LoanApplication'>
                <Welcome/>
                <br/>
                <br/>
                <br/>
                <div className ='example1'>
                   
                    <h1><b>PNG Limited</b></h1>
                    <br/>
                   <br/>
                   <br/>
                   <br/>
                    <h4 align = 'left' >Our <b>Corporate Office</b></h4>
                    <h5 align = 'left'>PNG Limited, Corporate Office</h5>
                    <h5 align = 'left'>Panagarh, West Bengal</h5>
                    <h5 align = 'left'>Pin: 713148</h5>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='home'>
                    <p>Promotors </p>
                    <p>Awards Recognition |</p>
                    <p>Media centre | </p>
                    <p>Vision and Values | </p>
                    <p>Corporate Profile | </p>
                    
                </div>

                <br />
            </div>
            
         );
    }
}
 
export default About;