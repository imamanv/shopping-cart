import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { cartToggle } from "../redux/features/cart/cartSlice";
import Data from "../dataProperties.json";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartToggler = () => {
    dispatch(cartToggle());
  };
  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuLinkHandler = (e) => {
    setIsMenuOpen(false);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="brand-img">
          <Link to="/">
            <img
              src="static\images\logo.png"
              alt="Brand Logo of Sabka Bazaar an E-commerce platform"
            />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {Data.Home}
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {Data.Products}
            </NavLink>
          </li>
        </ul>
        <div className="account-links">
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {Data.SignIn}
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {Data.Register}
              </NavLink>
            </li>
          </ul>
          <div className="cart-menu-container">
            <div className="cart-details" onClick={cartToggler}>
              <img
                src="static\images\cart.svg"
                alt="clickable cart icon to open cart"
              />
              <p>
                {totalQuantity} {Data.items}
              </p>
            </div>
            <div>
              <p onClick={menuHandler} className="menu-icon">
                Menu
              </p>
              <div className={`menu ${isMenuOpen ? "menu-active" : ""}`}>
                <ul onClick={menuLinkHandler}>
                  <li>
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : ""
                      }
                    >
                      {Data.Home}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : ""
                      }
                    >
                      {Data.Products}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : ""
                      }
                    >
                      {Data.SignIn}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : ""
                      }
                    >
                      {Data.Register}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
