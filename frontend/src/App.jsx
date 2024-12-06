// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();

  console.log("authUser in App.jsx:", authUser); // Add debugging here

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
