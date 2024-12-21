import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from 'react-router';
import FormPage from './pages/FormPage/FormPage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/form' element={<FormPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
