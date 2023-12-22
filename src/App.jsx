import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
      </main>
    </div>
  );
};

export default App;
