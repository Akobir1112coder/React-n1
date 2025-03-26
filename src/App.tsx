import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./page/Portfolio/Portfolio";
import Servis from "./page/Servis/Servis";
import Contact from "./components/contact";


const App = () => {
  const [val1, setVal1] = useState(true);
  const v = () => {
    document.querySelector(`.ul-nav`)?.classList.remove(`anim1`, `anim2`);
  };
  const click = () => {
    setVal1(!val1);
    document
      .querySelector(`.ul-nav`)
      ?.addEventListener(`animationend`, () => v);
  };
  return (
    <div className="asosiy">
    
      <BrowserRouter>
        <div className="main">
          <Header fun={click} value1={val1} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/servis" element={<Servis />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
