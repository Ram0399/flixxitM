// SignupScreen.js

import React, { useRef } from "react";
import { auth } from "../firebase"; // Import Firebase auth
import "firebase/auth";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    // Create a new user with the provided email and password using Firebase auth
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful registration
        const user = userCredential.user;
        console.log("Successfully registered:", user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Sign in the user with the provided email and password using Firebase auth
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful sign-in
        const user = userCredential.user;
        console.log("Successfully signed in:", user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_grey">New to Netflix? </span>
          <span className="signupScreen_link" onClick={handleRegister}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
