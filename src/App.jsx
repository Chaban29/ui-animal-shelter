import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import './styles/main.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
