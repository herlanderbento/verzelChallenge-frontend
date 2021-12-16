import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <Header />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}
