import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import IndexPage from "./IndexPage";
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/fav" element={<IndexPage />}></Route>
    </Routes>
  );
}
