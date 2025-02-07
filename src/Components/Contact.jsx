import Lottie from "react-lottie";
import React from "react";

import contact from "../assets/Animation - 1738872799685.json";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="grid lg:grid-cols-2 mb-[60px] pt-[100px]" id="contact">
      <div className="lg:pl-20 p-5">
        <h2 className="font-medium text-6xl py-12">Contact Me</h2>

        <form action="">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="your@mail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone No </span>
            </div>
            <input
              type="tel"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
          <div className="label">
              <span className="label-text">Your Message</span>
            </div>
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          </label>
         <div className="mt-8">
         <button className="btn btn-neutral btn-wide">Send Mail</button>
         </div>
        </form>
      </div>
      <div className="my-auto hidden lg:block">
        <Lottie options={defaultOptions} height={400} width={400}></Lottie>
      </div>
    </div>
  );
};

export default Contact;
