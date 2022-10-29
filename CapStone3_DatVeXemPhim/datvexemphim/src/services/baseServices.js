import axios from "axios";
import { DOMAIN, TOKEN } from "../../src/util/settings/config"

export class baseService {
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data: model,
            headers: { "Authorization": "Bearer" + localStorage.getItem(TOKEN) }
        })
    }

    post = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data: model,
            headers: { "Authorization": "Bearer" + localStorage.getItem(TOKEN) }
        })
    }

    get = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
            headers: { "TokenCyberSoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY" }
        })
    }

    delete = (url) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
            headers: { "Authorization": "Bearer" + localStorage.getItem(TOKEN) }
        })
    }
}