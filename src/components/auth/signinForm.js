import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class  SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={'${className} sign-in-form'}>
            <Field className='sign-in-form__email'
            type='email'
            title='Email'
            placeholder='Email'
            name='email'
            component={FormInput}/>gir
           <Field className='sign-in-form__password'
           type='password'
           title='password'
           placeholder='password'
           name='password'
           component={FormInput}/>
       </form>
            
        )
    }
}

  SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default  SignInForm;

