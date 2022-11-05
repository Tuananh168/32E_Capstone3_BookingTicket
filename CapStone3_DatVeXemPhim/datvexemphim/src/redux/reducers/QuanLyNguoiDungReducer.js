import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType"

const stateDefault = {
    userLogin: {}
}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            state.userLogin = action.thongTinNguoiDung
            return { ...state }
        }
        default: return { ...state }
    }
}