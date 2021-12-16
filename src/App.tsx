import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContextProvider";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ToastContainer theme="dark" />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
