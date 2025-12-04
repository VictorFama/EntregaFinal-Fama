import "./Loading.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Loading = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="loading-container">
      <div className={`spinner-grow loading ${dark ? "dark" : "light"}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
