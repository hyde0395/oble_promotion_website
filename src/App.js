import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Survey from "./pages/Survey";
import Test from "./pages/Test";
// import Manager from "./pages/Manager";
// import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Survey" element={<Survey />}></Route>
        <Route path="/Test" element={<Test />}></Route>
        {/* <Route path="/Manager" element={<Manager />}></Route>
        <Route path="/Login" element={<Login />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
