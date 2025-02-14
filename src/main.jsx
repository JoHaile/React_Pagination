import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./components/Movies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Movies />
  </StrictMode>
);
