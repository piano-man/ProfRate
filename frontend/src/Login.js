import React , {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

export default class Login extends Component{
  constructor(props)
  {
    super(props)
    this.onSignIn = this.onSignIn.bind(this)
    this.test = this.test.bind(this)
    this.googleResponse = this.googleResponse.bind(this)
  }
  test(e)
  {
    e.preventDefault()
    console.log("in here")
  }
   onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  } 
  googleResponse = (response) => {
    console.log(response);
}; 
    render() {
    
        return (
          <div className='wrapper'>
                              <GoogleLogin
                        clientId="1091762201107-6802ciaf38hqp5s3o2c85skgc6e4adbq.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
          </div>
        )
      }
}
