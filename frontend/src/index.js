import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

/**
 * @file
 * @author Adrien Weissenbacher
 * @see <a href="https://github.com/AdrienW86/sportsee.git" target="_blank"> Repository Github </a>
 */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);