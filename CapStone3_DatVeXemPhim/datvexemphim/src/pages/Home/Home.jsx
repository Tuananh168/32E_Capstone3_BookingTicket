import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRows from "../../components/React_Slick/MultipleRows";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";
import "../Home/Home.css";

const Home = () => {
  const { arrFilm, dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  const dispatch = useDispatch();
  // const renderFilm = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} />;
  //   });
  // };
  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
  }, []);

  let classNameDC = dangChieu === true ? "active_Film" : "non_active_Film";
  let classNameSC = sapChieu === true ? "active_Film" : "non_active_Film";
  console.log("DC", classNameDC);
  console.log("SC", classNameSC);
  return (
    <div className="container px-20 py-10">
      <button
        className={`${classNameDC} px-8 py-3 font-semibold rounded bg-gray-500 text-white border-gray-900 mr-2`}
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        Đang chiếu
      </button>
      <button
        className={`${classNameSC} px-8 py-3 font-semibold rounded bg-gray-500 text-white border-gray-900`}
        onClick={() => {
          const action = { type: SET_PHIM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        Sắp chiếu
      </button>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <MultipleRows arrFilm={arrFilm} />
        </div>
        {/* <div className="container px-5 py-24 mx-auto">{renderFilm()}</div> */}
      </section>

      <div className="mx-36">
        <HomeMenu />
      </div>
    </div>
  );
};

export default Home;
