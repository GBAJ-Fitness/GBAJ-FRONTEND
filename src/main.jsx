import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter } from "react-router-dom";
import Video from './Video.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={import.meta.env.VITE_DOMAIN}
  clientId={import.meta.env.VITE_CLIENTID}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >

 <React.StrictMode>
     <BrowserRouter>
     <Header />
    <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
  </Auth0Provider>
)