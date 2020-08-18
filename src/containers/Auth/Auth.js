import React, { useState } from 'react';
import { connect } from 'react-redux'
import { checkValidation } from 'shared/utility'
import * as actions from 'store/actions/index'
import './Auth.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import { Redirect } from 'react-router';
const Auth = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setError] = useState(false)


    const validate = (event) => {
        event.preventDefault()
        let validateError = checkValidation(email, password)
        validateError ? props.onAuthenticate({email: email, password: password}) : setError(true)
    }

    let authRedirect = null;
    if(props.isAuthenticated) {
        authRedirect = <Redirect to="/"/>
    }
    return (
        <Auxilliary>
            {authRedirect}
        <form className="auth__main">
            <h2>Login</h2>
            <div className="auth__form-group">
                <input 
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="auth__form-group">
                <input 
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <div className="auth__form-group">
                <button className="base__button" type="submit" onClick={validate}>LOGIN</button>
            </div>
        </form>
        </Auxilliary>
    
);
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate: (data) => dispatch(actions.authenticate(data))
    }
}
export default connect(null, mapDispatchToProps)(Auth);