import CardEpisodios from "../../components/CardEpisodios/CardEpisodios";
import TituloPersonaje from "../../components/TituloPersonaje/TituloPersonaje";
import Paginacion from "../../components/Paginacion/Paginacion";
import CircularProgress from "@mui/material/CircularProgress";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { useState, useEffect } from "react";

const EpisodiosPage = () => {
  const [episodios, setEpisodios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = useState(1);
  let resultado = episodios;
  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
    .then((res) => res.json())
    .then((data) => setEpisodios(data.results))
    .catch((e) => console.error(e.message));
  });
  
  if(busqueda)
    resultado=episodios.filter((data) => data.name.toLowerCase().includes(busqueda.toLocaleLowerCase()))

  return (
    <>
      <TituloPersonaje titulo="Episodio de los Simpsons" parrafo="disfuta de nuestros episodios, en la mejor calidad"/>
      <SearchComponent placeholder='Escribe el nombre del episodio' value={busqueda} onChange={(e)=>(setBusqueda(e.target.value))} />
      {resultado.length > 0 ? (
        resultado.map((episodio) => (
          <CardEpisodios key={episodio.id} props={episodio} />
        ))
      ) : (
        <CircularProgress />
      )}

      <Paginacion
        count={5}
        page={page}
        onChange={(event, value) => {
          setPage(value);
        }}
        variant="outlined"
      />
    </>
  );
};

export default EpisodiosPage;
