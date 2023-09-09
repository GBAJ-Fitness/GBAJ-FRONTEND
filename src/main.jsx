<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={import.meta.env.VITE_DOMAIN}
  clientId={import.meta.env.VITE_CLIENTID}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >

 <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
>>>>>>> 517ee830fbaac6bea23f97984163e0ddda5ffa98
)
