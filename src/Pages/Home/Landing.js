import React from "react";
import image from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <div className="relative">
      <div className="hero h-screen lg:h-[60vh] mt-16 bg-accent">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h5 className="text-xl">Best Quality</h5>
            <h1 className="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p className="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={image} className="h-full" alt="" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </div>
  );
};

export default Landing;
