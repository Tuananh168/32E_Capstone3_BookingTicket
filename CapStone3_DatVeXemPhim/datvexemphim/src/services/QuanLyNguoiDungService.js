
import { baseService } from "./baseServices"

export class QuanLyNguoiDungService extends baseService {



    constructor() {
        super()
    }

    dangNhap = (thongTinNguoiDung) => { //Tài Khoản : , Mật Khẩu :
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinNguoiDung)
    }


}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()