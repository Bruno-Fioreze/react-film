
import { useEffect, useState } from "react";
import api from "../../Services/api"

//movie/now_playing?api_key=3bdd5c46c9344dfdd445fd17026dc9f2&language=pt-BR



const Home = () => {
    const [film, setFilm] = useState([]);
        
    useEffect(() => {
        const loadFilm = async () => {
            const response = await api.get("movie/now_playing/", {
                params: {
                    api_key: "",
                    language: "pt-BR",
                    page: 1
                }
            })
            console.log("=========")
            console.log(response)
            console.log("=========")
        }

        loadFilm()
    }, [])

    return (
        <>
            <h1>
                Bem vindo a HOME
            </h1>
        </>
    )
}


export default Home