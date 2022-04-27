function Registration() {
  return (
    <div className="registration-page">
      <div className="registration-details">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="registration-form">
        <div className="first-name-container field">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" />
        </div>
        <div className="last-name-container field">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
        </div>
        <div className="email-container field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="password-container field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="confirm-password-container field">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" />
        </div>
        <button className="signup-btn">Signup</button>
      </div>
    </div>
  );
}

export default Registration;
