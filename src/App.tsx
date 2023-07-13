import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RunContextApp } from "./framework/RCApp";
import AppRoutes from "./routes/AppRoutes";
import GlobalContextProvider from './context/GlobalContext';
import { reducers } from "./store/reducers";
import {configureStore} from "@reduxjs/toolkit"


interface AppProps {
  rc: RunContextApp;
}

const App = (props: AppProps) => {

  const store = configureStore({reducer: reducers})

  return (
    <GlobalContextProvider rc={props.rc}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </GlobalContextProvider>
  );
};

export default App;
