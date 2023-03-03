import React, { useState } from 'react'
import './Login.css'
import amazon_logo from './images/Amazon_logo.svg.png';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {

    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("")

    const signIn = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((auth) =>{
            // history.push('/')
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) =>{
            console.log(auth);
            if(auth){
                // history.push('/');
                navigate('/');
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img 
                className='login_logo'
                src={amazon_logo}
                alt='Login Logo'
            />
        </Link>
        <div className='login_container'>
            <h1>Sign-In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' 
                    value={email} 
                    onChange={ e => setEmail(e.target.value)}
                    />

                <h5>Password</h5>
                <input type='password' 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)}
                    />

                <button type='submit' onClick={ signIn } className='login_signInButton'>Sign In</button>
            </form>

            <p>
                By Signing-in you agree to the Amazon Clone Conditions of use & Sale. Please see out Provacy Notice. Out Cookies Noice and our Interest-Based Ads Notice.
            </p>

            <button onClick={ register } className='login_registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login