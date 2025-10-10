import CardEpisodios from "../../components/CardEpisodios/CardEpisodios";
import TituloPersonaje from "../../components/TituloPersonaje/TituloPersonaje";
import Paginacion from "../../components/Paginacion/Paginacion";
import { useState,useEffect } from "react";

const EpisodiosPage = () => {
  const [episodios, setEpisodios] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
      fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
      .then((res) => res.json())
      .then((data) => setEpisodios(data.results))
      .catch((e) => console.error(e.message));
  });
  return (
    <>
    <TituloPersonaje titulo="Episodio de los Simpsons" parrafo="disfuta de nuestros episodios, en la mejor calidad" />
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 p-6">
        {episodios.map((episodio) => (
            <CardEpisodios key={episodio.id} props={episodio} />
        ))}
    </div>
      
      
      <Paginacion count={5} page={page} onChange={(event, value) => { setPage(value)}} variant="outlined"/>
    </>
  );
};
export default EpisodiosPage;
