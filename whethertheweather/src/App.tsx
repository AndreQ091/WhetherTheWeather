import React from 'react';
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import MonthStats from "./pages/MonthStats/MonthStats";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
        <div className="container">
            <Header/>
            <Routes>
                <Route element={<Home/>} path={'/'}/>
                <Route element={<MonthStats/>} path={'/month'}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
