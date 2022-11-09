import axios from "axios"
import { GET_MOVIELIST } from '../types/movieType'
import { ADD_MOVIELIST } from "../types/movieAddType"
import { GET_MOVIEINFO } from '../types/movieGetType'
import { UPDATE_MOVIEINFO } from '../types/movieUpdateType'
import { DELETE_MOVIELIST } from '../types/movieDeleteType'

export const movieActions = {
    getMovieList: (tenPhim = '') => {
        if (tenPhim.trim() !== '') {
            return async (dispatch) => {
                const result = await axios({

                    url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
                    method: 'GET',
                    headers: {
                        TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
                    }
                })
                dispatch({
                    type: GET_MOVIELIST,
                    payload: result.data.content,
                })
            }
        }
        return async (dispatch) => {
            const result = await axios({

                url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET',
                headers: {
                    TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
                }
            })
            dispatch({
                type: GET_MOVIELIST,
                payload: result.data.content,
            })
        }
    },
    addMovieList: (formData) => {
        return async (dispatch) => {
            const result = await axios({
                url: (`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`),
                method: 'POST',
                headers: {
                    "TokenCyberSoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',
                    "Content-Type": "multipart/form-data"

                },
                data: formData,
            })
            console.log('newmovie', result.data.content)
            dispatch({
                type: ADD_MOVIELIST,
                payload: result.data.content,
            })
        }
    },
    getMovieInfo: (maPhim) => {
        return async (dispatch) => {
            const result = await axios({
                url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
                method: 'GET',
                headers: {
                    TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
                },
            })
            dispatch({
                type: GET_MOVIEINFO,
                payload: result.data.content,
            })
        }
    },
    updateMovieInfo: (formData) => {
        return async (dispatch) => {
            const result = await axios({
                url: (`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`),
                method: 'POST',
                headers: {
                    "TokenCyberSoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',

                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3RyaW5nQGdtYWlsLmNvbW1tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJzdHJpbmdAZ21haWwuY29tbW0iLCJncDAxIl0sIm5iZiI6MTY2Nzk4MDQ5MywiZXhwIjoxNjY3OTg0MDkzfQ.HR4kEQDYtnsxapI70amyMtZS3aL0UJ8GPDLH78ZkS1U',

                    "Content-Type": "multipart/form-data"
                },

                data: formData,
            })
            // alert('Cập nhật phim thành công')
            dispatch({
                type: UPDATE_MOVIEINFO,
                payload: result.data.content,
            })
        }
    },
    deleteMovieInfo: (maPhim) => {
        return async (dispatch) => {
            const result = await axios({
                url: (`https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XP?MaPhim=${maPhim}`),
                method: 'DELETE',
                headers: {
                    "TokenCyberSoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',

                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3RyaW5nQGdtYWlsLmNvbW1tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJzdHJpbmdAZ21haWwuY29tbW0iLCJncDAxIl0sIm5iZiI6MTY2Nzk4MDQ5MywiZXhwIjoxNjY3OTg0MDkzfQ.HR4kEQDYtnsxapI70amyMtZS3aL0UJ8GPDLH78ZkS1U',

                },

            })
            alert('Xoá phim thành công')
            dispatch({
                type: DELETE_MOVIELIST,
                payload: result.data.content,
            })
        }
    },
}