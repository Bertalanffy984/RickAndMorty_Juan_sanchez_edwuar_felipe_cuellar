import { Link } from "react-router-dom";

const CardEpisodios = ({ props }) => {
  return (
    <Link to={`/card/episodes/${props.id}`}>
    <article className="h-[330px] w-[360px] shadow-md hover:bg-yellow-50 hover:shadow-amber-300 hover:scale-105 hover:border-yellow-400 transition-all duration-300
    hover:text-amber-800 flex flex-col ">
        <div className="h-[200px] m-2">
            <img
            src={`https://cdn.thesimpsonsapi.com/500${props.image_path}`}
            alt={`Imagen de ${props.name}`}
            className="w-full h-full rounded-xl"
            />
        </div>
        <div className="flex flex-col items-center mx-3">
            <ContenidoTarjeta name={props.name} season={props.season} episode_number={props.episode_number} airdate={props.airdate} synopsis={props.synopsis}/>
        </div>
    </article>
    </Link>
  );
};

export default CardEpisodios;

const ContenidoTarjeta=(props)=>{
    const{name, season, episode_number,airdate,synopsis}=props
    return(
        <>
          <h2 className="w-full text-center font-bold text-lg mb-1 overflow-ellipsis overflow-hidden whitespace-nowrap">{name}</h2>
          <p className="text-sm text-gray-800">
            Temporada {season} . Episodio {episode_number}
          </p>
          {airdate?(
          <p className="text-sm text-gray-400 mt-1">
             Fecha: {airdate} 
          </p>):''
          }
          <p className="w-full text-xs text-gray-8f00 mt-2 italic overflow-ellipsis overflow-hidden whitespace-nowrap">
            {synopsis}
          </p>
        </>
    )
}
