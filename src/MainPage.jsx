import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Banner from "./Components/Banner";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen ">
        <Banner></Banner>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
