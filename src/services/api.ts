import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://case-stone-backend.herokuapp.com/"
})

export default api