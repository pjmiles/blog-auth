const Register = () => {
  return (
    <form className="register-section">
      <div className="register-container">
        <div className="register-header-text">
          <h3 className="register-inner-text">Login Here</h3>
        </div>

        <div className="reg-username">
          <label htmlFor="firstName">First Name </label>
          <input
            className="register-input"
            type="text"
            id="firstName"
            placeholder="First Name"
          ></input>
        </div>
        <div className="reg-lastname">
          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="register-input"
            placeholder="LastName"
          ></input>
        </div>
        <div className="reg-email">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            className="register-input"
            placeholder="Email"
          ></input>
        </div>
        <div className="reg-password">
          <label htmlFor="password">Password </label>
          <input
            className="register-input"
            type="password"
            id="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="reg-confirm-password">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="register-input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          ></input>
        </div>
      </div>
      <button type="submit" className="reg-btn">
        Register
      </button>
    </form>
  );
};

export default Register;
