import React from "react";
import "./Film_Flip.css";

const Film_Flip = (props) => {
  const { item } = props;
  return (
    <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1 className="font-bold" style={{ height: "100px" }}>
              {item.tenPhim}
            </h1>
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
              <button>
                <i class="fa-solid fa-ticket"></i> Đặt vé
              </button>
              {/*USERS RATINGS*/}
              <button>
                <i className="fas fa-thumbs-up" /> 97%
              </button>
              <button>
                {item.danhGia}
                <i class="fas fa-star"></i>
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