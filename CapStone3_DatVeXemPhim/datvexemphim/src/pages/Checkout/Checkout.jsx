import React, { useEffect } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import "./screen.css";
import { useParams } from "react-router-dom";
import {
  datVe,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import { Fragment } from "react";
import { UserOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../redux/types/QuanLyDatVeType";
import _ from "lodash";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const { chiTietPhongVe, danhSachGheDangDat, thongTinDatVe } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("chiTietPhongVe: ", chiTietPhongVe);

  const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

  useEffect(() => {
    const action = layChiTietPhongVeAction(params.id);
    dispatch(action);
  }, []);

  const renderGhe = () => {
    return danhSachGhe?.map((item, index) => {
      let classGheVip = item.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = item.daDat === true ? "gheDuocChon" : "";
      let classGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === item.maGhe
      );
      let classGheUserDat = "";
      if (indexGheDangDat != -1) {
        classGheDaDat = "gheDangChon";
      }
      if (userLogin.taiKhoan === item.taiKhoanNguoiDat) {
        classGheUserDat = "gheUserDat";
      }
      return (
        <Fragment>
          <div
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: item,
              });
            }}
            disabled={item.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheUserDat} inline-block text-black text-center text-2xl`}
            key={index}
          >
            {/* {item.daDat ? <CloseOutlined /> : item.stt} */}
            {classGheUserDat != "" ? <UserOutlined /> : item.stt}
          </div>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg)",
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
        blur={5} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="container px-[100px] grid grid-cols-12 ">
          <div className="col-start-1 col-end-10 max-lg:col-end-12 w-full">
            <div className="manHinh mx-auto"></div>
            <div className="trapezoid flex justify-center mx-auto">
              <p className="text-red-900 text-2xl">Screen</p>
            </div>
            <div className="mt-10 text-center text-al">
              <div>{renderGhe()}</div>
            </div>
            <div className="mt-5 grid grid-cols-5">
              <div>
                <div className="ghe inline-block"></div>
                <span className="text-white ml-2 text-xl">Gh??? th?????ng</span>
              </div>
              <div>
                <div className="gheVip inline-block"></div>
                <span className="text-white ml-2 text-xl">Gh??? Vip</span>
              </div>
              <div>
                <div className="gheDuocChon inline-block"></div>
                <span className="text-white ml-2 text-xl">Gh??? ???????c ch???n</span>
              </div>
              <div>
                <div className="gheDangChon inline-block"></div>
                <span className="text-white ml-2 text-xl">Gh??? ??ang ch???n</span>
              </div>
              <div>
                <div className="gheUserDat inline-block text-center">
                  <UserOutlined />
                </div>
                <span className="text-white ml-2 text-xl">Gh??? user ?????t</span>
              </div>
            </div>
          </div>
          <div className="col-start-10 col-end-13 border p-2 rounded-md shadow-inner max-lg:col-start-1">
            <h1 className="text-center py-5 text-2xl text-white">
              {thongTinPhim?.tenPhim}
            </h1>
            <hr />
            <div className="grid grid-cols-2 py-5">
              <div className="grid-start-1">
                <p className="text-white">Ng??y Chi???u - Gi??? Chi???u</p>
              </div>
              <div className="grid-start-2 text-right">
                <p className="text-white">{thongTinPhim?.ngayChieu}</p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 py-5">
              <div className="grid-start-1">
                <p className="text-white">C???m r???p</p>
              </div>
              <div className="grid-start-2 text-right">
                <p className="text-white">{thongTinPhim?.tenCumRap}</p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 py-5">
              <div className="grid-start-1">
                <p className="text-white">R???p</p>
              </div>
              <div className="grid-start-2 text-right">
                <p className="text-white">{thongTinPhim?.tenRap}</p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 py-5">
              <div className="grid-start-1">
                <p className="text-white">Gh??? Ch???n</p>
              </div>
              <div className="grid-start-2 text-right">
                <p className="text-white">
                  {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                    return (
                      <span
                        key={index}
                        className="text-red-600 text-lg mr-[4px]"
                      >
                        {gheDD.stt}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 py-5">
              <div className="grid-start-1">
                <p className="text-white text-xl">T???ng Ti???n</p>
              </div>
              <div className="grid-start-2 text-right">
                <span className="text-red-500 text-xl">
                  {danhSachGheDangDat
                    .reduce((tongTien, ghe) => {
                      return (tongTien += ghe.giaVe);
                    }, 0)
                    .toLocaleString()}
                </span>
              </div>
            </div>
            <hr />
            <div>
              <button
                onClick={() => {
                  thongTinDatVe.maLichChieu = params.id;
                  thongTinDatVe.danhSachVe = danhSachGheDangDat;
                  console.log("thong tin dat ve", thongTinDatVe);

                  dispatch(datVe(thongTinDatVe));
                }}
                className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 my-5"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                style={{
                  background:
                    "linear-gradient(to right,#ee7724, #d8363a, #dd3675, #b44593)",
                }}
              >
                Booking TickKet
              </button>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default Checkout;
