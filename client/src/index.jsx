import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);
const root = createRoot(document.getElementById('app'));
root.render(<App />);
