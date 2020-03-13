import React, { Component } from 'react';
import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }
    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Login'/>
                <i class="fas fa-search"></i>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div> 
        )
    }
}



export default SignIn;

