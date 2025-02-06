

import html from "../assets/icons8-html-5-96.png"
import css from "../assets/icons8-css3-96.png"
import js from "../assets/icons8-javascript-96.png"
import react from "../assets/react.svg"
import nodejs from "../assets/icons8-nodejs-96.png"
import mongo from "../assets/icons8-mongo-db-96.png"
import express from "../assets/icons8-express-js-96.png"
import Marquee from "react-fast-marquee"
const Skills = () => {
  return (
    <div className="mb-[100px]">
        <h2 className="text-center">Skills</h2>
        <div >
        <Marquee>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={html} alt="" /></div>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={css} alt="" /></div>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={js} alt="" /></div>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={react} alt="" /></div>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={nodejs} alt="" /></div>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={mongo} alt="" /></div>
        <div className="p-5 border rounded-xl mr-5"><img className="h-[100px] mr-3" src={express} alt="" /></div>
        </Marquee>
        </div>
    </div>
  );
};

export default Skills;
