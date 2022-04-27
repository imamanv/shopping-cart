function Login() {
  return (
    <div className="login-page">
      <div className="login-details">
        <h1>Login</h1>
        <p>Get access to your Orders,Whishlist and Recommendations</p>
      </div>
      <div className="login-form">
        <div className="email-container field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="password-container field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
