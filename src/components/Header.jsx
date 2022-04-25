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
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-list-item">
            <a href="" className="nav-link">
              Products
            </a>
          </li>
        </ul>
        <div className="account-links">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="" className="nav-link">
                SignIn
              </a>
            </li>
            <li className="nav-list-item">
              <a href="" className="nav-link">
                Register
              </a>
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
