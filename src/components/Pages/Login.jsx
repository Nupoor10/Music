import React, { useState } from "react";
// import "./css/Login.css";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import { auth } from '../../firebase';
import {  signInWithEmailAndPassword  } from 'firebase/auth';

// ABHI CSS Baki Hai aur Responsiveness........................

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation({
      email: email,
      password: password
    }));
    // setErrors(Validation(values)); // getting error.....
    signInWithEmailAndPassword(auth, email, password)
    
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "/home"
            console.log(user);
  localStorage.setItem("user", user.displayName);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(errorMessage);
        });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      {/* BOOTSTRAP............ */}
      <div className="bg-white p-3 rounded w-25"
      style={{
        border: '0px solid gray',  // Add a border to the container
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'  // Add a shadow effect to the container
      }}>
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail( e.target.value)}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button to="/home" type="submit" className="btn btn-success w-100 "
           style={{
            border: '1px solid gray',  // Change the border color to gray
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'  // Add a shadow effect
          }}>
            Log in
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;



