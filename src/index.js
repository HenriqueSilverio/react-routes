import React from 'react';
import { render as Render } from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

Render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
