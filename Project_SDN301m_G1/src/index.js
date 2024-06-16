import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SkeletonTheme baseColor="#d9d9d9">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SkeletonTheme>
);

reportWebVitals();
