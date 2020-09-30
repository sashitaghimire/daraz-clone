import React from 'react'
import {Button} from "@material-ui/core";
import './Login.css';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes, reducer} from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })

            
        }).catch(error=>alert(error.message));


    }
    return (
        <div className="login">
             <img src="data:image/png;base64,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" alt=""/>
            <h4>Welcome to Daraz! Please Sign in</h4>
                    
                    
                    <Button onClick={signIn} className="loginButton">
                        <img className="login__btnGoogle"  src="https://www.flaticon.com/svg/static/icons/svg/2111/2111450.svg" alt=""/>Sign in with Google</Button>
            
            
            
        </div>
    )
}

export default Login;
