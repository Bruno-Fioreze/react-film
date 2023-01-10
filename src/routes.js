import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Film } from "./pages"
import { Header } from "./components"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/film/:id" element={<Film />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
