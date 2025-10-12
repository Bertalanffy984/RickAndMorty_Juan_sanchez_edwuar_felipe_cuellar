import '../CardPersonaje/CardPersonaje.css'
import { Link } from 'react-router-dom';
const CardLocalidades = ({ props }) => {
  return (
    <Link to={`/card/locations/${props.id}`}>
    <article className="h-[315px] w-[360px] shadow-md hover:bg-yellow-50 hover:shadow-amber-300 hover:scale-105 hover:border-yellow-400 transition-all duration-300
    hover:text-amber-800 flex flex-col ">
        <div className="h-[200px] m-2 ">
            <img
            src={`https://cdn.thesimpsonsapi.com/500${props.image_path}`}
            alt={`Imagen de ${props.name}`}
            className="w-full h-full rounded-xl"
            />
        </div>
        <div className="p-4 flex flex-col items-center">
            <ContenidoTarjeta name={props.name} pueblo={props.name} uso={props.use}/>
        </div>
    </article>
    </Link>
  );
};
export default CardLocalidades;

const ContenidoTarjeta=(props)=>{
    const{name, pueblo, uso}=props
    return(
        <>
            <h2 className="font-bold text-lg mb-1">
                {name}
            </h2>
            <p className="text-sm text-gray-600">
                <b>Pueblo:</b> {pueblo}
            </p>
            <p className="text-sm text-gray-600">
                <b>Uso:</b> {uso}
            </p>
        </>
    )
}