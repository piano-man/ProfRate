import React , {Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import config from './Config'

export default class Login extends Component{
  constructor(props)
  {
    super(props)
    this.state = {isAuthenticated : false,user : null , token : ""}
    this.googleResponse = this.googleResponse.bind(this)

  }
  logout = () => {
    this.setState({isAuthenticated: false, token: '', user:    null})
};
  googleResponse = async (response) => {
    console.log(response)
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    let res = await fetch("http://localhost:5000/auth/google",{
      method:'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    })
    const token = await res.headers.get('x-auth-token');
    console.log(token)
    // let res_json = await res.json();
    // console.log(res_json);
}; 
    render() {
      let content = !!this.state.isAuthenticated ?
      (
          <div>
              <p>Authenticated</p>
              <div>
                  {this.state.user.email}
              </div>
              <div>
                  <button onClick={this.logout} className="button">
                      Log out
                  </button>
              </div>
          </div>
      ) :
      (
          <div>
              <GoogleLogin
                  clientId={config.GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={this.googleResponse}
                  onFailure={this.onFailure}
              />
              {/* <button><a href="http://localhost:5000/auth/google">hello</a></button> */}
          </div>
      );
        return (
          <div className='wrapper'>
          {content}
          </div>
        )
      }
}
