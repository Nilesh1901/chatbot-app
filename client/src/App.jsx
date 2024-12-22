import React from "react";
import Chatbot from "./components/Chatbot";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute element={<Chatbot />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
