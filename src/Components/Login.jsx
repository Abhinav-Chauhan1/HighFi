import React, { useState } from 'react';
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { provider, providerfb } from '../firebaseConfig';
import FB from "./fb.svg"
import Google from "./google.svg"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onclk = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const onclkfb = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  }

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }


  return (
    <div className='main'>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input type="email"
            placeholder='Email'
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password"
            placeholder='Enter Password'
            name=""
            id=""
            onChange={(e) => setPassword(e.target.value)} />
          <input type="button"
            value="Submit"
            className='btn'
            onClick={onLogin} />
        </form>
        <div className="fb">
        <div>
        
          <button className='google'
            onClick={onclk} >
              <img src={Google} alt="Your SVG" />
              Sign In with Google</button>
        </div>
        <div>
          <button className='facebook'
            onClick={onclkfb} >
             <img src={FB} alt="Your SVG" />
            Sign In with Facebook</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Login
