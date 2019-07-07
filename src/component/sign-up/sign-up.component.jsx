import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'


export default class SignUp extends Component {

    constructor(){
        super();
        this.state= {
            email:'',
            password:'',
            displayName:'',
            confirmedPassword:''
        }
    }
    handleSubmit = async event => {
         event.preventDefault();
         const {displayName,email,password,confirmedPassword}= this.state;

         if(password.length < 6){
            alert("Password should be at least 6 characters")
            return;
        }
         if(password !== confirmedPassword){
             alert("Passwords don't match")
             return;
         }

         try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

           await createUserProfileDocument(user,{displayName});

           this.setState({
            email:'',
            password:'',
            displayName:'',
            confirmedPassword:''
           });

         }catch(error){
            console.log(error);
         }

    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {

            const {displayName,email,password,confirmedPassword}= this.state;
        return (
           <div className="sign-up">
           <h2 className='title'>I do not have an account</h2>
           <span>Sign up with your email and passord</span>
           
           <form className='sign-up-form' onSubmit={this.handleSubmit}>
           

           <FormInput 
            name='displayName' 
            value={displayName}  
            type="text" 
            label='Display Name'
            required
            onChange={this.handleChange}
           />

            <FormInput 
            name='email' 
            value={email}  
            type="email" 
            label='email'
            required
            onChange={this.handleChange}
           />

            <FormInput 
            name='password' 
            value={password}  
            type="password" 
            label='password'
            required
            onChange={this.handleChange}
            />

            <FormInput 
            name='confirmedPassword' 
            value={confirmedPassword}  
            type="password" 
            label='Confirm Password'
            required
            onChange={this.handleChange}
            />
            
            <div className="buttons">
                <CustomButton  type='submit' >SIGN UP</CustomButton>
            </div>
           

           </form>
           
           </div>
        )
    }
}
