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
    <div className="grid lg:grid-cols-2 mb-[100px]">
      <div className="pl-20">
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
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-8"
          ></textarea>
         <div className="mt-8">
         <button className="btn btn-neutral btn-wide">Send Mail</button>
         </div>
        </form>
      </div>
      <div className="my-auto">
        <Lottie options={defaultOptions} height={400} width={400}></Lottie>
      </div>
    </div>
  );
};

export default Contact;
