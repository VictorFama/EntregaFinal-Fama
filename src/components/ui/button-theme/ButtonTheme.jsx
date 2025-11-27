import './ButtonTheme.css';
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaMoon , FaSun } from "react-icons/fa";

const ButtonTheme = () => {
    const { dark, changeTheme } = useContext(ThemeContext);

    return (
        <button className={`theme-btn ${dark ? "dark" : "light"}`} onClick={changeTheme}>
            { dark ? <FaMoon className="icon-moon" /> : <FaSun className="icon-sun" /> }
        </button>
    );
};

export default ButtonTheme;
