import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <AuthProvider>
        <StyleSheetManager shouldForwardProp={() => true}>
          <App />
        </StyleSheetManager>
      </AuthProvider>
    </AuthProvider>
  </React.StrictMode>
);
