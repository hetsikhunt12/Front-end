import { Routes, Route } from "react-router-dom";

import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Menu from "./website/pages/Menu";
import Chef from "./website/pages/Chef";
import Contact from "./website/pages/Contact";
import Not from "./website/pages/Not";
import Register from "./website/pages/Register";
import Login from "./website/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="not" element={<Not />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
