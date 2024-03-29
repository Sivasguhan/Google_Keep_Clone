import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../assets/styles/styles.scss';
import { Provider } from 'react-redux';
import store from './store';

const root=document.getElementById('root');
createRoot(root).render(<Provider store={store}><App /></Provider>);