import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RunContextApp } from "./framework/RCApp";
import AppRoutes from "./routes/AppRoutes";
import GlobalContextProvider from './context/GlobalContext';


interface AppProps {
  rc: RunContextApp;
}

const App = (props: AppProps) => {
  return (
    <GlobalContextProvider rc={props.rc}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
