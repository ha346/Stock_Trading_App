import axios from "axios"

// const TOKEN = "cc26pu2ad3icrd10orqg"
const TOKEN = "cors4ghr01qturkgepq0cors4ghr01qturkgepqg"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})