import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterContextProvider from "./contexts/FilterContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </CartContextProvider>
);
