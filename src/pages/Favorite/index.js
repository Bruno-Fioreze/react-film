import { useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import "./favorite.css"

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem("@flix");
        setFavorites( JSON.parse(favorites) || [])
    }, [])

    const handleDeleteFilm = (id) => {
        let films = favorites.filter( (film) => {
            return (film.id !== id)
        } )
        setFavorites(films)
        localStorage.setItem("@flix", JSON.stringify(films))
        toast.success("Filme Removido com sucesso!")
    }

    return(
        <div className="my-favorites">
            
            {favorites.length === 0 && <span> Você não possui nenhum filme salvo.</span> }

            <ul>
                {favorites.map((film) => {
                    return (
                        <li key={film.id}>
                            <span>{film.title}</span>
                            <div className="area-buttons">
                                <Link to={`/film/${film.id}`} >Ver Detalhes</Link>
                                <button onClick={() => {
                                    handleDeleteFilm(film.id)
                                }}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorite;