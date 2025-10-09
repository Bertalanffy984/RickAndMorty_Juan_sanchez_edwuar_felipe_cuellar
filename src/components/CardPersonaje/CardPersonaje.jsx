import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CardPersonaje.css"
import { useState } from "react";

const CardPersonaje = ({props}) => {
  const {portrait_path,name,occupation,age,status,phrases}=props
  const [inside, SetInside]=useState(false)
  return (
    <div 
    className={`w-full sm:w-[350px] sm:h-[350px] lg:w-[260px] lg:h-[340px]
    padding_tarjeta shadow-md transition-all ease-in-out duration-100
    ${inside? 'shadow-amber-300 bg-yellow-50 scale-105 text-amber-800':''}`}
    onMouseEnter={()=>(SetInside(true))}
    onMouseLeave={()=>(SetInside(false))}
    >
      <div className={`h-[125px] w-[125px] m-auto shadow-lg transition-all ease-in-out duration-200
        ${inside?'rotate-4 scale-115 shadow-amber-300':''}`}>
        <img src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`} alt="personajeSerie" />
      </div>
      <CardContent>
          <ContenidoTarjeta name={name} occupation={occupation}/>
      </CardContent>
      <CardActions className="flex justify-center">
      {age?<ContenedorEdad age={age}/>:null}
      <ContenedorEstado status={status}/>
      </CardActions>
      <CardContent>
        <FraseDestacada phrases={phrases[0]}></FraseDestacada>
      </CardContent>
    </div>
  );
};
export default CardPersonaje;

const ContenidoTarjeta = (props) => {
  const{name,occupation}=props
  return (
    <>
      <Typography gutterBottom variant="h6" component="div" align="center" className="campo_text" sx={{ fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography variant="body2" align="center" className="campo_text">
        {occupation}
      </Typography>
    </>
  );
};

const ContenedorEdad=(props)=>{
  const {age}=props
  return(
      <Typography variant="subtitle2" align="center" className="campo_edad" sx={{ fontWeight: 'bold', color:'black'}}>
        age:{age}
      </Typography>
  )
}
const ContenedorEstado=(props)=>{
  const{status}=props
  return(
    <>
      <Typography variant="subtitle2" align="center" 
      className={`campoEstado ${status==='Alive'? 'color_verde':'color_rojo'}`}
      sx={{ fontWeight: 'bold'}}>
        {status}
      </Typography>
    </>
  )
}

const FraseDestacada=(props)=>{
  const{phrases}=props
  return(
    <>
      <Typography variant="subtitle2" align="center" className="campo_text campo_text_frase">
        {`"${phrases}"`}
      </Typography>
    </>
  )
}