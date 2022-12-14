import { GROUPID } from "../util/settings/config"
import { baseService } from "./baseServices"

export class QuanLyDatVeService extends baseService {


    constructor() {
        super()
    }

    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }


}

export const quanLyDatVeService = new QuanLyDatVeService()