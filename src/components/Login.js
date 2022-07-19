import { useState } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errLog, setErrLog] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user.username || !user.password) {
        setErrLog("Please provide your login details");
      } else if (
        user.username === user.password ||
        user.password === "undefined"
      ) {
        setErrLog("Please provide valid username or password");
      } else {
        const res = await axiosInstance.post("login", user);
        if (res.status === 200) {
          setSuccess(true);
        }

        // if (res.status == 404) {
        //   console.log("ggggs");
        //   setSuccess(false);
        //   setErrLog("Invalid user");
        // }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async (e) => {
    setUser((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {success ? (
        <section className="login-message">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/blogs">Go to Home</Link>
          </p>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="login-section">
          <div className="login-container">
            <div className="login-header-text">
              <h3 className="login-inner-text">Login Here</h3>
            </div>
            <div>{errLog}</div>

            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="login-input"
              placeholder="Enter your username"
              id="username"
              name="username"
              autoComplete="off"
              onChange={getUserDetails}
              value={user.username}
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              id="password"
              name="password"
              onChange={getUserDetails}
              value={user.password}
            ></input>

            <button type="submit" className="submit-btn-login">
              Login
            </button>
            <div className="no-account-login">
              No account? <Link to="/register/">Register</Link>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
