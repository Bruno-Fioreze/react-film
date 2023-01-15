
import { useEffect, useState } from "react";
import api from "../../services/api"
import { Link } from "react-router-dom";
import "./home.css"



const Home = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFilm = async () => {
            const response = await api.get("movie/now_playing/", {
                params: {
                    api_key: "3bdd5c46c9344dfdd445fd17026dc9f2",
                    language: "pt-BR",
                    page: 1
                }
            })

            if (response.status === 200) {
                setFilms(response.data.results.slice(0, 10))
                setLoading(false)
            }
        }

        loadFilm()
    }, [])

    if (loading) {
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="list-films">
                {
                    films.map(
                        (film) => {
                            return (
                                <article key={film.id}>
                                    <strong>
                                        {film.title}
                                    </strong>
                                    <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                                    <Link to={`/film/${film.id}`}> Acessar </Link>
                                </article>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}


export default Home