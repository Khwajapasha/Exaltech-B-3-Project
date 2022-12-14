import React, { useState } from "react";
import "./App.css";
import FormOne from "./Components/ALLForms/FormOne";
import FormThree from "./Components/ALLForms/FormThree";
import FormTwo from "./Components/ALLForms/FormTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./Components/ALLForms/Summary/Summary";
import Navigation from "./Components/ExaltechSoftware/Navigation/Navigation";
import CustomCarousel from "./Components/ExaltechSoftware/Carousel/CustomCarousel";
import Dashboard from "./Components/ExaltechSoftware/Dashboard/Dashboard";
import Courses from "./Components/ExaltechSoftware/Courses/Courses";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>App</h1>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormOne />} />
          <Route path="/formtwo" element={<FormTwo />} />
          <Route path="/formthree" element={<FormThree />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter> */}
      <button onClick={() => setShow(!show)}>Dashboard</button>
      {show && <Dashboard />}
      <hr></hr>
      <Navigation />
      <hr></hr>
      <CustomCarousel />
      <hr />
      <Courses />
    </div>
  );
}
export default App;
