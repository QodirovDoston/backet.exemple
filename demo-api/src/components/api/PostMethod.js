import axios from "axios";

export function postData(url, obj) {
    return axios.post(url, obj)
}