import "./Toast.css";
import { useContext } from "react";
import { useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Toast = ({ show, message, onClose }) => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [show, onClose]);
  if (!show) return null;

  return (
  <div className="toast-container-custom position-fixed bottom-0 end-0">
    <div className={`toast show toast-custom ${dark ? "dark" : "light"}`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-body">
        {message}
      </div>
    </div>
  </div>
);
};

export default Toast;
