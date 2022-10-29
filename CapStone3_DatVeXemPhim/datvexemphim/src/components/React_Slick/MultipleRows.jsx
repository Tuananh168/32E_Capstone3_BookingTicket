import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRows.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRows = (props) => {
  const renderFilms = () => {
    return props.arrFilm.slice(0, 20).map((item, index) => {
      return (
        <div key={index} className="px-7">
          <Film_Flip item={item} />
        </div>
      );
    });
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRows;
