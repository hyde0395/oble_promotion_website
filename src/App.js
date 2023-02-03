import React from "react";
import "./App.css";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Survey from "./pages/Survey";
import Navbar from "./components/Navbar";
import Test from "./pages/Test";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Survey" element={<Survey />}></Route>
        <Route path="/Test" element={<Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
