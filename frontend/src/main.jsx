import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyleSheetManager } from "styled-components";
import { LoaderProvider } from "./context/LoadProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <LoaderProvider>
        <StyleSheetManager shouldForwardProp={() => true}>
          <App />
        </StyleSheetManager>
      </LoaderProvider>
    </AuthProvider>
  </React.StrictMode>
);
