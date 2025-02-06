import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen ">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
