import React from "react";

import { useState } from "react";

import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";

import classes from "./Slider.module.css";

const Slider = () => {
  const [pos, setPos] = useState(0);
  const images = [
    {
      img: slide1,
    },
    {
      img: slide2,
    },
    {
      img: slide3,
    },
    {
      img: slide4,
    },
    {
      img: slide5,
    },
  ];

  const getId = (e) => {
    setPos(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };

  return (
    <>
      <div className={classes.parent}>
        <img
          className={classes.slideimages}
          src={images[pos].img}
          alt="images"
        ></img>
      </div>
      <div className={classes.dots}>
        <div onClick={getId} id="2" className={classes.but1}></div>
        <div onClick={getId} id="1" className={classes.but1}></div>
        <div className={classes.but2}></div>
        <div onClick={getId} id="0" className={classes.but3}></div>
        <div onClick={getId} id="3" className={classes.but1}></div>
        <div onClick={getId} id="4" className={classes.but1}></div>
      </div>
    </>
  );
};
export default Slider;
