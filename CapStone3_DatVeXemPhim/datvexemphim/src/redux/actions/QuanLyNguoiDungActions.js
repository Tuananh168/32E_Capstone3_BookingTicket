import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";



export const dangNhapAction = (thongTinNguoiDung) => {

    console.log(123);
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinNguoiDung)
            console.log("result: ", result);
            dispatch({
                type: DANG_NHAP_ACTION,
                thongTinNguoiDung: result.data.content
            })
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }
}