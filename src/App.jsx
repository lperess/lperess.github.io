import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import ConnectCommunity from "./pages/ConnectCommunity/ConnectCommunity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/connect" Component={ConnectCommunity} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
