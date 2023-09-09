import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={import.meta.env.VITE_DOMAIN}
  clientId={import.meta.env.VITE_CLIENTID}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >

 <React.StrictMode>
     <Header />
    <App />
    <Footer />
  </React.StrictMode>
  </Auth0Provider>

