import React from "react";
import "./TrainingStyles.css";

import { Link } from "react-router-dom";

import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa
          consequuntur a quaerat fugit aperiam, vero, corporis autem temporibus
          pariatur ipsa rerum, harum quis mollitia labore? Inventore quae neque
          sint.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} alt="" className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
