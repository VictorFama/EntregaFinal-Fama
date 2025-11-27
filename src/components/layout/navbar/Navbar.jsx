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
    <nav className={`navbar navbar-expand-lg ${dark ? "dark" : "light"}`}>
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">
          <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-top"/>
          Tienda React
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}> Inicio </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/itemlist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}> Productos </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <CartWidget />
          </div>
          <div>
            <ButtonTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
