import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// ...existing code...
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart-context';
import { LoginProvider } from './context/login-context';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);