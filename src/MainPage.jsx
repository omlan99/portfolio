import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

const MainPage = () => {
  return (
    <div className="container mx-auto" >
      <Navbar></Navbar>
      <div className="min-h-screen ">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
