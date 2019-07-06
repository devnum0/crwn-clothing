import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';


export default class SignIn extends Component {

    constructor(){
        super();
        this.state= {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        console.log(event)
         event.preventDefault();
        this.setState({ email:'' , password:'' });
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
           <div className="sign-in">
           <h2>I already have an account</h2>
           <span>Sign in with your email and passord</span>
           
           <form onSubmit={this.handleSubmit}>
           
            <FormInput 
            name='email' 
            value={this.state.email}  
            type="email" 
            label='email'
            required
            handleChange={this.handleChange}
           />

            <FormInput 
            name='password' 
            value={this.state.password}  
            type="password" 
            label='password'
            required
            handleChange={this.handleChange}/>
            
            <div className="buttons">
                <CustomButton  type='submit' >Sign In</CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
            </div>
           

           </form>
           
           </div>
        )
    }
}
