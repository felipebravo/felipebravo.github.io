import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import MainProvider from "./contexts/MainContext";
import Global from "./styles/global";

const App = () => {
  return (
    <>
      <MainProvider>
        <Global />
        <Header />
        <div className="main">
          <Nav />
          <Main />
        </div>
        <Footer />
      </MainProvider>
    </>
  );
};

export default App;
