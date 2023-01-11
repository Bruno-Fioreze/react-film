import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import api from "../../services/api"


const Film = () => {
    const { id } = useParams();
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const loadFilm = async () => {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: "3bdd5c46c9344dfdd445fd17026dc9f2",
                    language: "pt-BR",
                    page: 1
                }
            }).then((response) => {
                setFilm(response.data)
                setLoading(false)
            }).catch((error) => {

            })
        }
        loadFilm()
    }, [] )

    if (loading) {
        return(
            <div className="film-detail">
                <h1>Carregando detalhes</h1>
            </div>
        )
    }

    return (
        <div className="film-information">
            <h1>{film.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />
            <h3>Sinopse: </h3>
            <span>{film.overview}</span>
            <strong>Avaliação: {film.vote_average} / 10</strong>
        </div>
    )
}
export default Film