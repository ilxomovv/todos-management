import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Notes from "./Pages/Notes.jsx";

createRoot(document.getElementById("root")).render(
  //Route bilan ishlayapman
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </BrowserRouter>,
);
