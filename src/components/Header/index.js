import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link className="logo" to="/"> Flix </Link>
            <Link className="favorites" to="/favorites"> Meus Filmes </Link>
        </header>
    )
}

export default Header