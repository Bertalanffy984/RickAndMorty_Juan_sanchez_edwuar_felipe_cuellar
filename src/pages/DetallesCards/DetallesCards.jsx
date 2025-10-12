import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPersonaje from "../../components/CardPersonaje/CardPersonaje";
import CardLocalidades from "../../components/CardLocalidades/CardLocalidades";
import CardEpisodios from "../../components/CardEpisodios/CardEpisodios";
const DetallesCards = () => {
  const [tarjeta, setTarjeta] = useState({});
  const params = useParams();
  useEffect(() => {
    const getCard = async () => {
      const res = await fetch(
        `https://thesimpsonsapi.com/api/${params.nombreTar}/${params.id}`
      );
      const data = await res.json();
      setTarjeta(data);
      console.log(data);
    };
    getCard();
  }, []);

  let componente = null;
  if (params.nombreTar === "locations") {
    componente = <CardLocalidades props={tarjeta} className />;
  } else if (params.nombreTar === "episodes") {
    componente = <CardEpisodios props={tarjeta} />;
  } else {
    componente=<CardPersonaje props={tarjeta}/>;
  }

  return (
    <div className="w-dvw h-100 flex items-center justify-center">  
      {componente}
    </div>
  );
};

export default DetallesCards;
