import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Choose from "./components/Choose/Choose";
import OurTerms from "./components/OurTerms/OurTerms";
import Location from "./components/Location/Location";
import Contacts from "./components/Contacts/Contacts";
import HowToHelp from "./components/HowToHelp/HowToHelp";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App" id="App">
      <Header />
      <main className="main" id="main">
        <Hero />
        <About />
        <Choose />
        <OurTerms />
        <Location />
        <Contacts />
        <HowToHelp />
      </main>
      <footer className="footer" id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
