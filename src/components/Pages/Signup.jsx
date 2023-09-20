import React,{ useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/Signup.css';
import { Link,  useHistory } from "react-router-dom";
import Validation from "./SignupValidation";
import { auth } from '../../firebase';
import {  createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
// ABHI CSS Baki Hai aur Responsiveness........................

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const history = useHistory();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation({
      name: name,
      email: email,
      password: password
    }));
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, { displayName: name });
            window.location.href = '/login'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setErrors({ error : errorMessage})
            alert(errorMessage);
            // ..
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
        <h2>Sign-Up</h2>
        <form action="/login" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value )}
              className="form-control rounded-0"
              placeholder="Enter Your Name"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
              className="form-control rounded-0"
              placeholder="Enter Email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value )}
              className="form-control rounded-0"
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button className="btn btn-success w-100 "
          style={{
            border: '1px solid gray',  // Change the border color to gray
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'  // Add a shadow effect
          }}>Sign up</button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;

