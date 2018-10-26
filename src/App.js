import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ChittawelaPage from './containers/ChittawelaPage/ChittawelaPage';

const app = () => (
  <BrowserRouter>
    <ChittawelaPage />
  </BrowserRouter>
);

export default app;

