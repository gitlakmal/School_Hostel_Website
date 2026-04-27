import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // මේ පේළිය අනිවාර්යයෙන් තියෙන්න ඕනේ
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);