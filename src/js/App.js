import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/js/pages/Layout.js';
import Home from '@/js/pages/Home.js';

// Import global styles
import '@/styles/global.css';

export default function App() {
    return (
        <ChakraProvider>
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
        </ChakraProvider>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
container.style.opacity = '1';
