import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RunContextApp } from "./framework/RCApp";
import AppRoutes from "./routes/AppRoutes";
import GlobalContextProvider from './context/GlobalContext';
import { reducers } from "./store/reducers";
// import {store,persistor }from "./store/Store"
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from "@reduxjs/toolkit";


interface AppProps {
  rc: RunContextApp;
}

const store = configureStore({reducer:reducers});

const App = (props: AppProps) => {

  return (
    <GlobalContextProvider rc={props.rc}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </GlobalContextProvider>
  );
};

export default App;
