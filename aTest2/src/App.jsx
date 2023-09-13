import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}

export default App;
