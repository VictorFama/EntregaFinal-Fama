import './Navbar.css';
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";
import logo from '../../../assets/react.svg';
import CartWidget from '../../ui/cart-widget/CartWidget';
import ButtonTheme from '../../ui/button-theme/ButtonTheme';

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-expand-sm ${dark ? "navbar-dark dark" : "navbar-light light"}`}>
  <div className="container-fluid">

    <NavLink className="navbar-brand d-flex align-items-center" to="/">
      <img src={logo} alt="logo" width="30" height="30" className="me-2" />
      Tienda React
    </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/itemlist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Productos
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="d-flex align-items-center gap-3">
      <CartWidget />
      <ButtonTheme />
    </div>

  </div>
</nav>

  );
};

export default Navbar;
