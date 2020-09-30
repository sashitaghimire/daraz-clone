import React from 'react'
import {Button} from "@material-ui/core";
function Login() {
    return (
        <div className="login">
            <h4>Welcome to Daraz! Please login</h4>
            <div className="login__box">
                <form>
                    <label>Phone number or Email</label>
                    <input type="text"/>
                    <label>Phone number or Email</label>
                    <input type="text"/>
                    <p>Forgot password?</p>
                    </form>    

            </div>
            <div >
                <Button>Login</Button>
            </div>
            <div>
                <Button>Google</Button>
            </div>
            <div>
                <Button>Facebook</Button>
            </div>
        </div>
    )
}

export default Login;
