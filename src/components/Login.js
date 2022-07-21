import { useState } from "react";
import axiosInstance from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errLog, setErrLog] = useState(null);
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("login", user);
      setSuccess(true)
      navigate("/blogs")
    } catch (error) {
      setErrLog("Invalid user details")
      console.log(error)
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
            <Link to="/blogs">Go to Blog page</Link>
          </p>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="login-section">
          <div className="login-container">
            <div className="login-header-text">
              <h3 className="login-inner-text">Login Here</h3>
            </div>
            <div className="login-error">{errLog}</div>

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
              required
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
              required
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
