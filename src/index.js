import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { UserProvider } from "./Components/DataContext/DataContext";
import { ValueProvider } from "./Components/DataContext/ValueContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
		<ValueProvider>
	      <App />
		</ValueProvider>
    </UserProvider>
  </BrowserRouter>,
);
