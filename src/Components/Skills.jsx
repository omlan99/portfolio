import html from "../assets/icons8-html-5-100.png";
import css from "../assets/icons8-css3-100.png";
import js from "../assets/icons8-javascript-100.png";
import react from "../assets/icons8-react-96.png";
import nodejs from "../assets/icons8-nodejs-96 (1).png";
import mongo from "../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
import express from "../assets/icons8-express-js-96 (1).png";
import tailwind from "../assets/icons8-tailwind-css-96.png"
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <div className="mb-[100px]">
      <h2 className="text-center text-6xl font-medium pb-20">Skills</h2>
      <div>
        <Marquee>
          <div className="p-5 border border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={html} alt="" />
            <p className="font-semibold text-center">HTML 5</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={css} alt="" />
            <p className="font-semibold text-center">CSS</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={js} alt="" />
            <p className="font-semibold text-center">Javascript</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={tailwind} alt="" />
            <p className="font-semibold text-center">Tailwind</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={react} alt="" />
            <p className="font-semibold text-center">React</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={nodejs} alt="" />
            <p className="font-semibold text-center">Nodejs</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={mongo} alt="" />
            <p className="font-semibold text-center">MongoDB</p>
          </div>
          <div className="p-5 border  border-gray-400 rounded-xl mr-5">
            <img className="h-[100px] mr-3" src={express} alt="" />
            <p className="font-semibold text-center">Express js</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
