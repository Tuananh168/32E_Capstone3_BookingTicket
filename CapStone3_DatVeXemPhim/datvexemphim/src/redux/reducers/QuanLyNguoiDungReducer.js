import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType"


let user = {};
if (localStorage.getItem(USER_LOGIN)) { // Sẽ kiểm tra nếu người dùng đã đăng nhâp thì sẽ không cần đăng nhập nữa
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

console.log("user", user)

const stateDefault = {
    userLogin: user,
    taiKhoanDangKy: [],
}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)
            return { ...state, userLogin: thongTinDangNhap }
        }
        case DANG_KY_ACTION: {
            const { taiKhoanDangKy } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(taiKhoanDangKy))

            return { ...state }
        }
        default: return { ...state }
    }
}