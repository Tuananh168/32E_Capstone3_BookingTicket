import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../redux/actions/CarouselActions";

const HomeCarousel = (props) => {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  // Sẽ tự kích hoạt khi component tự động load lên.

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: "800px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    // height: "100%",
  };

  const renderCarousel = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} alt="123" className="w-full opacity-0" />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel effect="fade" style={{ position: "relative", zIndex: 1 }}>
      {renderCarousel()}
    </Carousel>
  );
};

export default HomeCarousel;
