import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Family from "./components/Family";

function App() {
  return (
    (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Family" element={<Family />} />
      </Routes>
    )
  )};

export default App;
