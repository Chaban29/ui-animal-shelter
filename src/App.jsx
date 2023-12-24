import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Choose from "./components/Choose/Choose";
import OurTerms from "./components/OurTerms/OurTerms";
import Location from "./components/Location/Location";

import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Choose />
        <OurTerms />
        <Location />
      </main>
    </div>
  );
};

export default App;
