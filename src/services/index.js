import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-k83t.onrender.com"
})