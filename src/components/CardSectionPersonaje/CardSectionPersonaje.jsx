import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardSectionPersonaje = () => {
  const [personaje, setPersonaje] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((res) => res.json())
      .then((data) => setPersonaje(data.items))
      .catch((e) => console.log(e.message));
  }, []);

  return (
      personaje.map((personaje) => (
        <Card className="flex w-[480px] " sx={{ backgroundColor:"rgb(70, 78, 95)",color:"white" }} key={personaje.id}>
          <CardMedia
            component="img"
            sx={{ width: 155, height: 160, objectFit: "contain" }}
            image={personaje.image} 
            alt="imagen personaje hora de aventura"
          />
          <Box className="w-full">
            <CardContent className="flex flex-col gap-0.5">
              <ContenidoTarjeta name={personaje.name} fullName={personaje.race} kingDom={personaje.ki} />
            </CardContent>
          </Box>
        </Card>
      ))
  );
};
export default CardSectionPersonaje;

const ContenidoTarjeta = (props) => {
  const { name, fullName, kingDom } = props;
  return (
    <>
      <h4 className="text-3xl font-bold">{name}</h4>
      <Typography variant="subtitle2" component="div" className="text-gray-300">
        Full name:
      </Typography>

      <Typography component="div" variant="h6">
        {fullName}
      </Typography>
      <Typography variant="subtitle2" component="div" className="text-gray-300">
        Kingdom:
      </Typography>
      <Typography component="div" variant="h6" className="underline">
        {kingDom}
      </Typography>
    </>
  );
};
