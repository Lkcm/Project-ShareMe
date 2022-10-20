import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css'


// ReactDOM.render(<App/>, document.getElementById('root'));

// // const container = document.getElementById('app');
// const root = createRoot
// root.render(<App/>);


const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <Router>
<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}><App/></GoogleOAuthProvider>
  </Router>
);