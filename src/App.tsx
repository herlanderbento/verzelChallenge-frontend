import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}
