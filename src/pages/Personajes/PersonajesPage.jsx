import CardPersonaje from "../../components/CardPersonaje/CardPersonaje";
import CircularProgress from "@mui/material/CircularProgress";
import TituloPersonaje from "../../components/TituloPersonaje/TituloPersonaje";
import Paginacion from "../../components/Paginacion/Paginacion";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { useState, useEffect } from "react";

const PesonajesPage = () => {
  const [personajesData, setPersonajesData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  let resultado=personajesData

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
      .then((res) => res.json())
      .then((data) => {setPersonajesData(data.results)})
      .catch((e) => console.log(e.message));
  }, [page]);

  if(busqueda)
    resultado=personajesData.filter((data) => data.name.toLowerCase().includes(busqueda.toLocaleLowerCase()))

  return (
    <>
      <TituloPersonaje titulo="Los Personajes mas populares" parrafo="Conoce a los icónicos habitantes amarillos de Springfield."/>
      <SearchComponent placeholder='Escribe el nombre del personaje' value={busqueda} onChange={(e)=>(setBusqueda(e.target.value))} />
      {resultado.length > 0 ? (
        resultado.map((personaje) => (
          <CardPersonaje key={personaje.id} props={personaje} />
        ))
      ) : (<CircularProgress />)
    }
    <Paginacion count={5} page={page} onChange={(event, value) => { setPage(value)}} variant="outlined"/>
    </>
  );
};
export default PesonajesPage;
