import React, { Component } from 'react';
import './App.css';
import {Input,Button,} from 'antd';
import {Redirect } from 'react-router-dom'


class Login extends Component {

  constructor(props){
    super(props)
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
    this.state = {
      SignUpFirstName: '',
      SignUpLastName: '',
      SignUpEmail: '',
      SignUpPassword: '',
      SignInEmail:'',
      SignInPassword:'',
      isUserExist:false
    }
  }

  handleSubmitSignUp(){

    console.log('BOUTTON OK')

    fetch(`http://10.2.3.62:3000/sign-up`, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `first_name=${this.state.SignUpFirstName}&last_name=${this.state.SignUpLastName}&email=${this.state.SignUpEmail}&password=${this.state.SignUpPassword}`
    }
    ).then(function(res, err){
      return res.json()
    }).then(data => {

      console.log('Dans mon fetch -->',data)
 
        this.setState({
          isUserExist:true
        })

    })
  
  }



  handleSubmitSignIn(){

    console.log('Dans HandleSubmitIn',this.state.SignInEmail)

    fetch(`http://10.2.3.62:3000/sign-in?email=${this.state.SignInEmail}&password=${this.state.SignInPassword}`)
    .then(response => response.json())
    .then(data => {

      console.log('Dans mon fetch -->',data)

     
      if(data.isUserExist){

        this.setState({
          isUserExist:true
        })
        
      }

    });

  }

  render() {

    if(this.state.isUserExist){
    return <Redirect to='/Homepage' />
    } 

    return (
      <div className="Login-page" >

          {/* SIGN-IN */}

          <div className="Sign">
                  
                  <Input onChange={(e) => this.setState({SignInEmail: e.target.value})} className="Login-input" placeholder="email" />

                  <Input.Password onChange={(e) => this.setState({SignInPassword: e.target.value})} className="Login-input" placeholder="password" />
            

            <Button onClick={this.handleSubmitSignIn} style={{width:'80px'}} type="primary">Sign-in</Button>

          </div>

          {/* SIGN-UP */}

          <div className="Sign">
                  
                  <Input onChange={(e) => this.setState({SignUpFirstName: e.target.value})} className="Login-input" placeholder="FirstName" /> 
                  
                  <Input onChange={(e) => this.setState({SignUpLastName: e.target.value})} className="Login-input" placeholder="Name" />

                  <Input onChange={(e) => this.setState({SignUpEmail: e.target.value})} className="Login-input" placeholder="email" />

                  <Input.Password onChange={(e) => this.setState({SignUpPassword: e.target.value})} className="Login-input" placeholder="password" />

            <Button onClick={this.handleSubmitSignUp} style={{width:'80px'}} type="primary">Sign-up</Button>

          </div>

      </div>
    );
  }
}



export default Login;