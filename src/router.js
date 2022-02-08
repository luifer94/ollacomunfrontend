import React, { useEffect } from "react";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const RoutedApp = () => {
    
    return (
    <Router>
        <Routes>
            <Route path="/" element={<App pageTitle="Dashboard" />} />
        </Routes>
    </Router>)
};

export default RoutedApp;
