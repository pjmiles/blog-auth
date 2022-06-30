const Login = () => {
  return (
    <>
      <form className="contain">
        <div className="login-container">
          <div className="login-header-text">
            <h3 className="login-inner-text">Login Here</h3>
          </div>

          <label htmlFor="username">username</label>
          <input
            type="text"
            className="login-input"
            placeholder="Enter your username"
            id="username"
            name="username"
            required
          ></input>

          <label htmlFor="password">password</label>
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            id="password"
            name="password"
            required
          ></input>

          <button type="submit" className="submit-btn-login">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
