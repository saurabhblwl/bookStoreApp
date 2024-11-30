// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
