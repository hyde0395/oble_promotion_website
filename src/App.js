import Navbar from "./components/Navbar";
import Survey from "./components/Survey";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Survey />
    </Router>
  );
}

export default App;
