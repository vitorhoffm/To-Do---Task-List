import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavigationScreen from "./Navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Hooks/Context/AuthContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <NavigationScreen />
        <ToastContainer />
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found');
}
