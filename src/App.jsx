import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";
import Insurance from "./Pages/Insurance";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <div className="App bg-white min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
