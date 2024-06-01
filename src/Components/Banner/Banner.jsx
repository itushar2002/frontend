import React from "react";
import "./banner.css";
import imageModel from '../Assets/hero-banner-fasion.jpg'
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="left">
          <div className="lineone"></div>
          <div className="vertical">
            <h2>fashion Choice</h2>
          </div>
          <div className="linetwo"></div>
          <div className="text-center">
            <h1>
              fashion <span>Uni</span>verse
            </h1>
            <h5>NEW ARRIVAL</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, quia!
            </p>
            <button>Latest collection</button>
          </div>
        </div>
        <div className="right">
          <img
            src={imageModel}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
