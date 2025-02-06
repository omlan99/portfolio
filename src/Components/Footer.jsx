import React from "react";
import linkedin from "../assets/icons8-linkedin-96.png";
import github from "../assets/icons8-github-logo-94.png"
import x from "../assets/icons8-x-logo-50.png"
import fb from "../assets/icons8-facebook-logo-96.png"
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/omlan99" target="_blank">
             <img className="w-[40px] " src={linkedin} alt="" />
            </a>
            <a href="https://github.com/omlan99" target="_blank">
            <img className="w-[40px] " src={github} alt="" />
            </a>
            <a href="https://x.com/omlan99" target="_blank">
            <img className="w-[40px] " src={x} alt="" />
            </a>
            <a href="https://facebook.com/omlan99" target="_blank">
            <img className="w-[40px] " src={fb} alt="" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Amlan Dey
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
