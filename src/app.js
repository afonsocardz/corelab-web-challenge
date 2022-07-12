import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle, ResetStyle } from "./GlobalStyle";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}