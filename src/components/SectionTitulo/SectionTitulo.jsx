// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import WorkIcon from '@mui/icons-material/Work';
// import { useState } from 'react';

// export default function FolderList({ items }) {

//   const[index,setIndex]=useState(0)
//   return(
//     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
//       {items.map((element, i)=>(
//       <ListItem 
//       key={element.key}
//       onClick={()=>setIndex(i)}
//       className={index===i?'bg-indigo-400':''}
//       >
//         <ListItemAvatar>
//           <Avatar>
//             <WorkIcon/>
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary={element.nombre} secondary={element.fechaNaci}></ListItemText>
//       </ListItem>
//     ))}
//     </List>
//   );
// }

//estructura.map((item)=>(
//)
//)

// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import octane from "../../assets/Octane.png";
// import caustic from "../../assets/Caustic.png";
// import alter from "../../assets/Alter.png";

// const personajes = [
//   {
//     nombre: "octane",
//     descripcion: "Soy el mas rapido!",
//     ulrImage: octane ,
//     key: "1222",
//   },
//   {
//     nombre: "Caustic",
//     descripcion: "Soy el mas toxico",
//     ulrImage: caustic ,
//     key: "1232",
//   },
//   {
//     nombre: "Alter",
//     descripcion: "Soy la mas bella",
//     ulrImage: alter ,
//     key: "1242",
//   },
// ];

// const CardSection = () => {
//   // const { children } = props;
//   {/* {children} */} //esto va dentro de donde vamos a poner un hijo
//   return (
//    personajes.map((element, i) => (
//     <Card className='h-120 w-80'> 
//       <CardActionArea key={element.key}>
//         <CardMedia
//           component="img"
//           height="140"
//           image= {element.ulrImage}
//           alt={element.nombre}
//         />
//         <CardContent>
//           <CardBody title={element.nombre} text={element.descripcion} />
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   ))
//   )
// };

// export default CardSection;

// export const CardBody = (props) => {
//   const { title, text } = props;
//   return (
//     <>
//       <Typography gutterBottom variant="h5" component="div">
//         {title}
//       </Typography>
//       <Typography variant="body2" sx={{ color: "text.secondary" }}>
//         {text}
//       </Typography>
//     </>
//   );
// };
import React from "react";
const SectionTitulo=()=>{
    return(
        <h1
         className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-yellow-200 
         mt-7 mb-13">
         The Adventure Time</h1>
    )
}
export default SectionTitulo

export const SectionTituloPersonajes=(params)=>{
    const{title}=params
    return(
        <h2 className="text-center text-5xl font-bold mt-7 mb-13 text-white w-full">{title}</h2>
    )
}

