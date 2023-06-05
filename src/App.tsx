import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { RunContextApp } from './framework/RCApp';
import AppRoutes from "./routes/AppRoutes"

interface AppProps {
  rc : RunContextApp
}

function App(props: AppProps) {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
