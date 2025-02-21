import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
// import { SpeedInsights } from '@vercel/speed-insights/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
        {/* <SpeedInsights projectId="prj_P92UKZtLbkI3kk73c2cgya6T9bgd" /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);