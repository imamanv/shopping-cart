import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { cartToggle } from "../../src/redux/features/home/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  const cartToggler = () => {
    dispatch(cartToggle());
  };
  return (
    <header>
      <nav className="navbar">
        <div className="brand-img">
          <Link to="/">
            <img
              src="static\images\logo.png"
              alt="Brand Logo of Sabka Bazaar"
            />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Products
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
                SignIn
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div className="cart-details" onClick={cartToggler}>
            <img src="static\images\cart.svg" alt="" />
            <p>{totalQuantity} items</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
