import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="brand-img">
          <img src="static\images\logo.png" alt="Brand Logo of Sabka Bazaar" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <div className="account-links">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/login" className="nav-link">
                SignIn
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/signup" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
          <div className="cart-details">
            <img src="static\images\cart.svg" alt="" />
            <p>0 items</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
