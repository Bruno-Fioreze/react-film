import axios from "axios"
// BASE_URL https://api.themoviedb.org/3/

//movie/now_playing/550?api_key=3bdd5c46c9344dfdd445fd17026dc9f2&language=pt-BR


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api