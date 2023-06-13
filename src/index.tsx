import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  InitConfig,
  RunContextApp,
  RunState,
  RUN_MODE
} from "./framework/RCApp";
import { LOG_LEVEL } from "./framework/RCLogger";
import { AppFlavour } from './configs/AppFlavours';

const appFlavour = AppFlavour.getFlavour();
const runMode = appFlavour.environment;
const logLevel = appFlavour.environment === RUN_MODE.PROD ? LOG_LEVEL.NONE : LOG_LEVEL.DEBUG

const ic = new InitConfig(runMode, logLevel, true)
const rs = new RunState()
const rc = new RunContextApp(ic, rs)
rc.init()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App rc={rc} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
