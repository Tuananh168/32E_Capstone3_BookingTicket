import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";



export const dangNhapAction = (thongTinDangNhap) => {

    console.log(123);
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            console.log("result: ", result);
            dispatch({
                type: DANG_NHAP_ACTION,
                thongTinDangNhap: result.data.content
            })
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}

export const dangKyTaiKhoan = (taiKhoanDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKyTaiKhoan(taiKhoanDangKy)
            console.log("result: ", result);
            dispatch({
                type: DANG_KY_ACTION,
                taiKhoanDangKy: result.data.content
            })
        } catch (error) {
            console.log("error", error.response?.data)
        }
    }
}