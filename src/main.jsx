import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CryptoProvider } from "./context/CryptoContext.jsx";
import { TrendingProvider } from "./context/TrendingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrendingProvider>
      <CryptoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CryptoProvider>
    </TrendingProvider>
  </React.StrictMode>
);
