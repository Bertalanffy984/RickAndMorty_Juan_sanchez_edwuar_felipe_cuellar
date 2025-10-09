import CardPersonaje from "../../components/CardPersonaje/CardPersonaje";
import CircularProgress from "@mui/material/CircularProgress";
import TituloPersonaje from "../../components/TituloPersonaje/TituloPersonaje";
import Paginacion from "../../components/Paginacion/Paginacion";
import { useState, useEffect } from "react";

const PesonajesPage = () => {
  const [page, setPage] = useState(1);
  const [personajesData, setPersonajesData] = useState([]);
  const totalPages=5

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
      .then((res) => res.json())
      .then((data) => {setPersonajesData(data.results)})
      .catch((e) => console.log(e.message));
  }, [page]);

  return (
    <>
      <TituloPersonaje titulo="Los Personajes mas populares" parrafo="Conoce a los icónicos habitantes amarillos de Springfield."/>
      {personajesData.length > 0 ? (
        personajesData.map((personaje) => (
          <CardPersonaje key={personaje.id} props={personaje} />
        ))
      ) : (<CircularProgress />)
    }
    <Paginacion count={totalPages} page={page} onChange={(event, value) => { setPage(value)}} variant="outlined"/>
    </>
  );

  // return (
  // );
};
export default PesonajesPage;
