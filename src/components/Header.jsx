import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/">
            <img className="nav-brand-img" src="static/images/logo.png" />
          </Link>
          <div className="nav-links">
            <div className="prod-links">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            </div>
            <div className="login-links">
              <Link to="/signin">SignIn</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
