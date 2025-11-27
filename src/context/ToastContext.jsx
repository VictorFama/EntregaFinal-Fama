import { createContext, useState } from "react";
import Toast from "../components/ui/toast/Toast";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast show={toast.show} message={toast.message} onClose={closeToast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;