import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Index";
import Overview from "./pages/overview/Index";
import Claim from "./pages/claim/Index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Overview />} path="/overview" />
        <Route element={<Claim />} path="/claim" />
      </Routes>
    </>
  );
};

export default App;
