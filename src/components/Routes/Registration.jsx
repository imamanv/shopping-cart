import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../dataProperties.json";

function Registration() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [cPasswordError, setCPasswordError] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    for (const field in formFields) {
      if (!formFields[field]) setIsEmptyField(true);
    }
    setSubmitClicked(true);
  };
  const fieldHandler = (e) => {
    setIsEmptyField(false);
    if (e.target.id === "password") {
      if (e.target.value.length < 6)
        setPasswordError("Password should contain atleast 6 characters");
      else if (e.target.value.includes(" "))
        setPasswordError("Password can't contain spaces");
      else if (
        formFields["cpassword"] &&
        formFields["cpassword"] !== e.target.value
      ) {
        setCPasswordError("Password do not match");
      } else {
        setPasswordError("");
        setCPasswordError("");
      }
    }
    if (e.target.id === "cpassword") {
      if (e.target.value !== formFields["password"]) {
        setCPasswordError("Password do not match");
      } else {
        setCPasswordError("");
      }
    }
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    if (submitClicked && !isEmptyField && !passwordError && !cPasswordError) {
      navigate("/");
    }
    setSubmitClicked(false);
  }, [submitClicked, isEmptyField]);
  return (
    <div className="registration-page">
      <div className="registration-details">
        <h1>{Data.SignUp}</h1>
        <p>{Data.SingupSummary}</p>
      </div>
      <form className="registration-form" onSubmit={formHandler}>
        <div className="first-name-container field">
          <label htmlFor="fname">{Data.FirstName}</label>
          <input type="text" id="fname" onChange={fieldHandler} />
        </div>
        <div className="last-name-container field">
          <label htmlFor="lname">{Data.LastName}</label>
          <input type="text" id="lname" onChange={fieldHandler} />
        </div>
        <div className="email-container field">
          <label htmlFor="email">{Data.Email}</label>
          <input type="text" id="email" onChange={fieldHandler} />
        </div>
        <div className="password-container field">
          <label htmlFor="password">{Data.Password}</label>
          <input type="password" id="password" onChange={fieldHandler} />
          {passwordError && <p className="error-field">{passwordError}</p>}
        </div>
        <div className="confirm-password-container field">
          <label htmlFor="cpassword">{Data.ConfirmPassword}</label>
          <input type="password" id="cpassword" onChange={fieldHandler} />
          {cPasswordError && <p className="error-field">{cPasswordError}</p>}
        </div>
        {isEmptyField && <p className="error-field">{Data.emptyFieldError}</p>}
        <button className="signup-btn">{Data.Signup}</button>
      </form>
    </div>
  );
}

export default Registration;
