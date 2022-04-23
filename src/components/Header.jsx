import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="row">
          <div className="col col-1">
            <img
              src="static\images\logo.png"
              alt="Brand Logo of Sabka Bazaar"
            />
          </div>
          <div className="col col-2">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="col col-3">
            <Link to="/">SingIn</Link>
            <Link to="/products">Register</Link>
            {/* <div className="cart-info">
              <img src="static\images\cart.svg" alt="cart icon" />
              <p>0 items</p>
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
