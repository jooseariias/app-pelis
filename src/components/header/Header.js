import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Search from "../Search/Search"
import Filter from "../Filter/Filter"


const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link className="Link-h1" to="/"><h1 className="Titulo-H">PelisEnCasa</h1></Link>
                < Filter  />
                <Search className="Buscar-home-o"/>
            </div>
        </div>
    )
}

export default Header