import CardLocalidades from "../../components/CardLocalidades/CardLocalidades";
import TituloPersonaje from "../../components/TituloPersonaje/TituloPersonaje";
import Paginacion from "../../components/Paginacion/Paginacion";
import CircularProgress from "@mui/material/CircularProgress";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { useState, useEffect } from "react";

const LocalidadesPage = () => {
  const [localidades, setLocalidades] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  let resultado=localidades

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
      .then((res) => res.json())
      .then((data) => setLocalidades(data.results))
      .catch((e) => console.error(e.message));
  }, [page]);

  if(busqueda)
    resultado=localidades.filter((data) => data.name.toLowerCase().includes(busqueda.toLocaleLowerCase()))

  return (
    <>
      <TituloPersonaje titulo="Lugares de Los Simpsons" parrafo="Explora las ubicaciones más icónicas de Springfield"/>
      <SearchComponent placeholder='Escribe el nombre del episodio' value={busqueda} onChange={(e)=>(setBusqueda(e.target.value))} />
      {
        resultado.length>0?
        (
          resultado.map((localidad) => (
            <CardLocalidades key={localidad.id} props={localidad} />
          ))
        
      ):(<CircularProgress/>)
      }
      <Paginacion count={5} page={page} onChange={(event, value) => setPage(value)} variant="outlined"/>
    </>
  );
};

export default LocalidadesPage;
