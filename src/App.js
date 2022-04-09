import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Createpage from "./pages/Createpage";
import Listpage from "./pages/Listpage";
import Editpage from "./pages/Editpage";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Createpage />} />
        <Route path="/list" element={<Listpage />} />
        <Route path="/edit/:id" element={<Editpage />} />
      </Routes>
    </div>
  );
}

export default App;
