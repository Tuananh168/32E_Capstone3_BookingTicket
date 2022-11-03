import React, { useEffect, useState } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/style_circle/circle.css";
import { Radio, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { SET_CHI_TIET_PHIM } from "../../redux/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions";
import moment from "moment";

const Detail = (props) => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const { TabPane } = Tabs;
  const params = useParams();
  const dispatch = useDispatch();

  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log("filmDetail: ", filmDetail);

  useEffect(() => {
    console.log(params.id);
    dispatch(layThongTinChiTietPhim(params.id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
      className="bg-no-repeat w-full"
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh", width: "100%" }}
        effectColor="gray" // required
        color="gray" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-3 col-start-3">
            <img
              src={filmDetail.hinhAnh}
              style={{ width: 300, height: 400 }}
              alt="123"
            />
          </div>
          <div className="col-start-6 col-end-9" style={{ marginTop: "10%" }}>
            <p className="text-sm text-white">
              Ngày chiếu :{" "}
              {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
            </p>
            <h1 className="text-white text-2xl">{filmDetail.tenPhim}</h1>
            <p className="text-white text-sm">{filmDetail.moTa}</p>
            <div style={{ marginTop: "20%" }}>
              <button className="text-white text-lg">
                <i className="fa-brands fa-youtube" /> Xem trailer
              </button>
              <button className="text-white text-lg ml-2">
                <i className="fa-solid fa-ticket" /> Mua vé Ngay
              </button>
            </div>
          </div>
          <div
            className={`c100 p${filmDetail.danhGia * 10} col-start-10`}
            style={{ marginTop: "50%" }}
          >
            <span>{filmDetail.danhGia * 10}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
            <span className="text-yellow-500" style={{ marginTop: "70%" }}>
              Đánh giá phim
            </span>
          </div>
        </div>
        <div className="mt-[100px] container px-20">
          <Tabs tabPosition={"left"}>
            <TabPane tab="Tab 1" key="1">
              Abc
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              nagna
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              gagag
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
};

export default Detail;
