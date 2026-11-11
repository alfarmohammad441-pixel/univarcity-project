import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import  Authprovider from "./context/Authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Authprovider>
        <App />    
      </Authprovider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
