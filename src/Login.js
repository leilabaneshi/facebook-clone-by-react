import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { TheatersRounded } from '@material-ui/icons';

function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => alert(error.message));

    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt="" />

                <img src='https://loghi-famosi.com/wp-content/uploads/2020/04/Facebook-Logo.png'

                    alt="" />

            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
