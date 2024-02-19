import React, { useState } from 'react'
import "./Login.css"
import { Input } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase.js';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }
  return (
      <div className='login'>
          <Link to="/">
              <img className='login_logo' src = "https://upload.wikipedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
          </Link>
          <div className='login_container'>
              <h1>Sign-In</h1>
              <form>
                  <h5>email</h5>
                  <Input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                  <h5>passwod</h5>
                  <Input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                  <button type = 'submit' className='login_signInButton' onClick={signin}>Sign in</button>
              </form>
              <p>
                  By signing-in you agree to the Amazon Fake Clone conditions to use & sale. Please see our privacy notice, our cookies notice and our Interest-based Ads notice.
              </p>
              <button className='login_registerButton' onClick={register}>
                  Create your Amazon account
              </button>
          </div>
    </div>
  )
}

export default Login