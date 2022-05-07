import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../dataProperties.json";

function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const loginFormHandler = (e) => {
    e.preventDefault();
    if (
      loginFields["email"] === "aman.verma@gmail.com" &&
      loginFields["password"] === "HelloAman1234"
    ) {
      setLoginError("");
      navigate("/");
    } else {
      setLoginError("Invalid email id or password");
    }
  };
  return (
    <div className="login-page">
      <div className="login-details">
        <h1>{Data.Login}</h1>
        <p>{Data.LoginSummary}</p>
      </div>
      <form className="login-form" onSubmit={loginFormHandler}>
        <div className="email-container field">
          <label htmlFor="email">{Data.Email}</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setLoginFields({ ...loginFields, [e.target.id]: e.target.value });
            }}
          />
        </div>
        <div className="password-container field">
          <label htmlFor="password">{Data.Password}</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setLoginFields({ ...loginFields, [e.target.id]: e.target.value });
            }}
          />
        </div>
        {loginError && <p className="error-field">{loginError}</p>}
        <button className="login-btn">{Data.Login}</button>
      </form>
    </div>
  );
}

export default Login;
