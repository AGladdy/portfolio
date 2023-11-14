import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import profilePic from './assets/AFprofile.png';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <meta name="description" content="Insight into the works of NYC graphic designer, Annalise Faith." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Annalise Faith" />
    <meta property="og:description" content="Insight into the works of NYC graphic designer, Annalise Faith." />
    <meta property="og:url" content="https://www.annalisefaith.com/" />
    <meta property="og:image" content={profilePic} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Annalise Faith" />
    <meta name="twitter:description" content="Insight into the works of NYC graphic designer, Annalise Faith." />
    <meta name="twitter:image" content={profilePic} />
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
);
