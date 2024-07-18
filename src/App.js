import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Sections from "./components/Sections";
import Elevate from "./components/sessions/Elevate";
import Footer from "./components/footer";
import "./App.css";
import Navigation2 from "./components/Navigation2";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Sections />
              </>
            }
          />
          <Route
            path="/elevate"
            element={
              <>
                <Navigation2 />
                <Elevate />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
