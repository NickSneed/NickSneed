import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/js/pages/Layout.js';
import Home from '@/js/pages/Home.js';

// Import global styles
import '@/styles/global.css';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="*"
                        element={<Home />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
container.style.opacity = '1';
