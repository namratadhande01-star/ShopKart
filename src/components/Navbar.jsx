import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (
    <>
      {/* Top Shipping Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              alt="ShopKart"
              className="shopkart-logo"
            />
          </Link>
          <div className="dropdown category-dropdown">
            <button className="category-btn dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">  All Categories </button>

            <ul className="dropdown-menu">
              <li> <Link className="dropdown-item" to="/product"> Electronics </Link> </li>
              <li> <Link className="dropdown-item" to="/product"> Fashion </Link> </li>
              <li> <Link className="dropdown-item" to="/product"> Home & Kitchen </Link> </li>
              <li> <Link className="dropdown-item" to="/product"> Beauty & Personal Care </Link> </li>
              <li> <Link className="dropdown-item" to="/product"> Sports & Fitness </Link> </li>
              <li> <Link className="dropdown-item" to="/product"> Books & Stationery </Link> </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="shopKartNavbar">
            <ul className="navbar-nav main-nav">

              <li className="nav-item"> <NavLink className="nav-link active" to="/"> Home
              </NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/product"> Products</NavLink>
              </li>
               <li className="nav-item"> <NavLink className="nav-link" to="#"> Deals </NavLink> </li>
                <li className="nav-item"> <NavLink className="nav-link" to="#"> About Us </NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="#"> Contact </NavLink>  </li>

            </ul>

            {/* Search */}
<div className="search-box">
  <input type="text" placeholder="Search for products..." />
  <button className="search-btn">
    <img src="/icons/search-icon.png" alt="Search" />
  </button>
</div>

            {/* Icons */}
<div className="nav-actions">
  <Link to="#">
    <img src="/icons/heart.png" alt="Wishlist" className="nav-icon" />
  </Link>

  <div className="cart-wrapper">
    <Link to="/cart">
      <img src="/icons/cart-icon.png" alt="Cart" className="nav-icon" />
      <span className="cart-count">3</span>
    </Link>
  </div>

          </div>

        </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
