import { useState, useEffect, useRef } from "react";

const Login = () => {
  const errRef = useRef();

  const [user, setUser ] = useState({username: "", password: ""});
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setSuccess(true);
  };

  const getUserDetails = (event) => {
    setUser((current) => ({...current, [event.target.name]: event.target.value,}))

    // to validate user
    // if(setUser === user.username) {
    //   errMsg('')
    // }
  };
 

  // to empty out error message when the state of the user or password changes
  useEffect(() => {
    setErrMsg("");
  });

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="login-container">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="login-header-text">
              <h3 className="login-inner-text">Login Here</h3>
            </div>

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
          </div>
        </form>
       )} 
    </>
  );
};

export default Login;
