import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <h1>Login</h1>
        <p>Get access to your Orders,Whishlist and Recommendations</p>
      </div>
      <form className="login-form" onSubmit={loginFormHandler}>
        <div className="email-container field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setLoginFields({ ...loginFields, [e.target.id]: e.target.value });
            }}
          />
        </div>
        <div className="password-container field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setLoginFields({ ...loginFields, [e.target.id]: e.target.value });
            }}
          />
        </div>
        {loginError && <p className="error-field">{loginError}</p>}
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
