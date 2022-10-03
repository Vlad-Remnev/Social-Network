import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

interface IFormData {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: IFormData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: FC<InjectedFormProps<IFormData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder='login' name='login' component='input'/>
            </div>
            <div>
                <Field type="text" placeholder='password' name='password' component='input'/>
            </div>
            <div>
                <Field type="checkbox" name='rememberMe' component='input'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<IFormData>({
    form: 'login'
})(LoginForm)