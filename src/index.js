import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import {Recoilroot} from "recoil"
import App from "./App";
// import Routing from "./routing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import Routing from "./routing";
import reportWebVitals from './reportWebVitals'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/fav" element={<IndexPage/>}/>
    </Routes> */}
      <Routing />
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
