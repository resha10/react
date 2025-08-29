// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store }  from "./store.js"; 


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>
// );


// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
