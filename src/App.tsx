import React from 'react';
import './App.css';

import { RunContextApp } from './framework/RCApp';

interface AppProps {
  rc : RunContextApp
}

function App(props: AppProps) {
  return (
    <div className="App">
      Oauth-Dashboard
    </div>
  );
}

export default App;
