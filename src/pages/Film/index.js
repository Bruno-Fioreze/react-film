import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../services/api"
import "./film.css"


const Film = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);
    
    const handleSaveFilm = () => {
        const myFilmList = localStorage.getItem("@flix")
        let filmsSaved = JSON.parse(myFilmList) || [];
        const hasFilm  = filmsSaved.some((filmSave) => filmSave.id === film.id )
    
        if (hasFilm) {
            toast.warn("Este Filme já está salvo!")
            return
        }

        filmsSaved.push(film)
        localStorage.setItem("@flix", JSON.stringify(filmsSaved))
        toast.success("Filme Salvo Com Sucesso!")
    }



    useEffect( () => {
        const loadFilm = async () => {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "3bdd5c46c9344dfdd445fd17026dc9f2",
                    language: "pt-BR",
                    page: 1
                }
            }).then((response) => {
                setFilm(response.data)
                setLoading(false)
            }).catch((error) => {
                navigate("/", {replace: true})
                return
            })
        }
        loadFilm()
    }, [id, navigate] )

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
            <div className="area-buttons">
                <button onClick={handleSaveFilm}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${film.title}`} target="blank" rel="external"> Trailer </a>
                </button>
            </div>
        </div>
    )
}
export default Film