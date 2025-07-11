import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import ReactDOM from 'react-dom/client';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,
);