import React from "react";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutedApp = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>)
};

export default RoutedApp;
