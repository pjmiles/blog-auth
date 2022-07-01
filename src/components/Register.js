import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setRegistered(true);
  };

  const getUserDetails = (e) => {
    setUser((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {registered ? (
        <section>
          <h1>Your Registration was successful</h1>
          <br />
          <p>
            <a href="#">Please Login Here!</a>
          </p>
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
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
                name="firstName"
                placeholder="FirstName"
                value={user.firstName}
                onChange={getUserDetails}
              ></input>
            </div>
            <div className="reg-lastname">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="register-input"
                placeholder="LastName"
                value={user.lastName}
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="register-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={getUserDetails}
              ></input>
            </div>
          </div>
          <button type="submit" className="reg-btn">
            Register
          </button>
        </form>
      )}
    </>
  );
};

export default Register;
