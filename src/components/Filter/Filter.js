import React from "react"


const Filter = () => {
    return (
        <div className="Cont-Select">
            
            <label  htmlFor=""><h4 className="Letras-F">Peliculas</h4></label>
              <select className="Letras-selex" >
                <option className="Letras-selex" value={"All"}>Categorias</option>
                <option value="asc">accion</option>
                <option value="desc">drama</option>
                <option value="desc">comedia</option>
                <option value="desc">C.Ficion</option>
                <option value="desc">Terror</option>
                <option value="desc">Estrenos</option>
              </select>
              <label  htmlFor=""><h4 className="Letras-F">Series</h4></label>
              <select className="Letras-selex" >
              <option className="Letras-selex" value={"All"}>Categorias</option>
                <option className="Letras-selex" value="asc">accion</option>
                <option value="desc">drama</option>
                <option value="desc">comedia</option>
                <option value="desc">C.Ficion</option>
                <option value="desc">Terror</option>
                <option value="desc">Estrenos</option>
              </select>
            
        </div>
    )
}

export default Filter;