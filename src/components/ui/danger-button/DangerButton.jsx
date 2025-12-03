import "./DangerButton.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export const DangerButton = ({ children, onClick }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <button 
      className={`danger-btn ${dark ? "dark" : "light"}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
