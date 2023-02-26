import React from "react";
import  {useState, useEffect} from 'react';
import axios from 'axios'
const Search = () => {


  const [ pelicula, setPelicula ] = useState([]);
  const [ next, setNext ] = useState(1);
  const [ buscar, setBuscar ] = useState ('');



  const texto =  document.getElementById('texto');
  
  const buuscar = () =>{
    const hola = pelicula.filter(element => element.original_title === buscar);
    console.log(hola) 
    return hola.length > 1 
  }
   buuscar() 

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=${next}`)
         .then(res => setPelicula(res.data.results))
         
  },[next]);


  return (
  <div className="Home-Serarch">
    <input className="Buscar-input" id="texto"placeholder="Buscar.." type="text"/>
      <button className="boton-buscar" id="buscar"  onClick={()=> setBuscar(texto.value)}>Buscar</button>
  </div>)
};

export default Search;
