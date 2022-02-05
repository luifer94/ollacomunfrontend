import React from "react";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutedApp = () => {
    <Router>
        <Routes>
            <Route path="/" element={<App />} >
            </Route>
        </Routes>
    </Router>
};

export default RoutedApp;
