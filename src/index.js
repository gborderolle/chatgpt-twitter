import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<App />);
