import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import '../scss/styles.scss';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);