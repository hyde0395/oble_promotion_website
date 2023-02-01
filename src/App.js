import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import Survey from "./components/Survey";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Survey /> */}
    </Router>
  );
}

export default App;
