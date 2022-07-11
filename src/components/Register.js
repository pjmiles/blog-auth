import { useState } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.first_name === "" ||
      user.last_name === "" ||
      user.username === "" ||
      user.email === "" ||
      user.password === "" ||
      user.password2 === ""
    ) {
      setErrMsg("please provide all required details");
      setRegistered(false)
    }
    else if (user.password !== user.password2) {
      setErrMsg("Password does not match");
      setRegistered(false)
    }
    else if (user.password.length <= 7){
      setErrMsg("Password must be more than 7 characters")
      setRegistered(false);
    } else {
      setRegistered(true);
      postRequest()
    }
  };

  // 

  const getUserDetails = (e) => {
    setUser((current) => ({
      ...current,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const postRequest = async () => {
    try {

     const data = await axiosInstance.post("register", {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        password: user.password,
        password2: user.password2,
      })
      if(data.status === 200){
        return true
      } else {
        setErrMsg("user already exist")
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {registered ? (
        <section>
          <h1>Your Registration was successful</h1>
          <br />
          <p>
            <Link to="/login/">Please Login Here!</Link>
          </p>
        </section>
      ) : (
        
        <form onSubmit={handleSubmit} className="register-section">
          <div className="register-container">
            <div className="register-header-text">
              <h3 className="register-inner-text">Register Here</h3>
            </div>

            <div className="reg-username">
              <label htmlFor="first_name">First Name </label>
              <input
                className="register-input"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Firstname"
                value={user.first_name}
                onChange={getUserDetails}
              ></input>
           
            </div>
            <div className="reg-lastname">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="register-input"
                placeholder="lastname"
                value={user.last_name}
                onChange={getUserDetails}
              ></input>
             
            </div>
            <div className="reg-username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="register-input"
                placeholder="username"
                value={user.username}
                onChange={getUserDetails}
              ></input>
              
            </div>
            <div className="reg-email">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                id="email"
                name="email"
                className="register-input"
                placeholder="Email"
                value={user.email}
                onChange={getUserDetails}
              ></input>
            </div>
            <div className="reg-password">
              <label htmlFor="password">Password </label>
              <input
                className="register-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={getUserDetails}
              ></input>
              
            </div>
            <div className="reg-confirm-password">
              <label htmlFor="password2">Confirm Password</label>
              <input
                className="register-input"
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                value={user.password2}
                onChange={getUserDetails}
              ></input> 
            </div>
          </div>
          <button type="submit" className="reg-btn">
            Register
          </button>
          <div>{errMsg}</div>
        </form>
      )}
    </>
  );
};

export default Register;
