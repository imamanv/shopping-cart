function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="nav-brand-img" src="static/images/logo.png" />
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
