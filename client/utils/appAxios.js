import axios from "axios"
export const appAxios = axios.create({
    baseURL: "http://localhost:8000/api/v1/"
})