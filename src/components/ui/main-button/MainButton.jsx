import "./MainButton.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const MainButton = ({ children, onClick, className = "" }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <button onClick={onClick} className={`main-btn ${dark ? "dark" : "light"} `}>
      {children}
    </button>
  );
};

export default MainButton;
