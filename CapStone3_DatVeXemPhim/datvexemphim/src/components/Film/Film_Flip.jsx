import React from "react";
import { useNavigate } from "react-router-dom";
import "./Film_Flip.css";

const Film_Flip = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <span className="mr-1 font-bold bg-red-600 px-2 py-1 rounded-lg text-white text-lg">
              C18
            </span>
            <h2
              className="font-bold text-xl py-4 text-black inline-block"
              style={{ height: "80px" }}
            >
              {item.tenPhim}
            </h2>
            <div className="card_cat">
              <p className="PG">PG - 13</p>
              <p className="year">2018</p>
              <p className="genre">Action | Adventure </p>
              <p className="time">2h 28m</p>
            </div>
            <p className="disc" style={{ height: "120px" }}>
              {item.moTa.length > 100 ? (
                <span>{item.moTa.slice(0, 100)}...</span>
              ) : (
                <span>{item.moTa}</span>
              )}
            </p>

            <div className="social-btn">
              {/* WATCH TRAILER*/}
              <button>
                <i className="fas fa-play" /> SEE TRAILER
              </button>
              {/* GET*/}
              <button onClick={() => navigate(`/detail/${item.maPhim}`)}>
                <i className="fa-solid fa-ticket" /> Đặt vé
              </button>
              {/*USERS RATINGS*/}
              <button>
                <i className="fas fa-thumbs-up" /> 97%
              </button>
              <button>
                {item.danhGia}
                <i className="fas fa-star" />
              </button>
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={item.hinhAnh} alt={item.tenPhim} />
          </div>
          <div className="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i className="fas fa-play-circle" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film_Flip;
