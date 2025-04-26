import React from "react";
import person from "../assets/Amlan.jpg";
import linkedin from "../assets/icons8-linkedin-50.png";
import github from "../assets/icons8-github-50.png";
import x from "../assets/icons8-x-logo-50.png";
import fb from "../assets/icons8-facebook-logo-50.png";
const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 mb-[60px] py-[150px] gap-5 " id="home">
      <div className="pl-8 lg:pl-20 flex flex-col justify-center">
        <div className="flex items-center pb-5">
          <div>
            <p className="font-semibold text-2xl">Hello, I am</p>
         <div className="my-5">
         <h2 className="font-bold text-6xl py-4">Amlan Dey</h2>
         <p className="font-semibold text-3xl">a Web developer</p>
         </div>
          </div>
        </div>
        <div className="mb-7">
          <p className="text-xl pb-3">Let's get connected </p>
          <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/omlan99" target="_blank">
            <img className="w-[30px]" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/omlan99" target="_blank">
            <img className="w-[30px]" src={github} alt="" />
          </a>
          <a href="https://facebook.com/omlan99" target="_blank">
            <img className="w-[30px]" src={fb} alt="" />
          </a>
          <a href="https://x.com/omlan99" target="_blank">
            <img className="w-[30px]" src={x} alt="" />
          </a>
          </div>
        </div>
        <div >
        <button className="btn btn-neutral mt-6 btn-wide">Resume</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="h-[500px] w-[500px] rounded-full object-cover"
          src={person}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
