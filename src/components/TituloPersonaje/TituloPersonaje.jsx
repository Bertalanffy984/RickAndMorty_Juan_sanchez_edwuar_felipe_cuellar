import Typography from "@mui/material/Typography";
const TituloPersonaje = (props) => {
  const {titulo, parrafo} = props;
  return (
    <>
        <h3 className="w-full text-4xl text-center font-bold">{titulo}</h3>
        <p className="w-full text-center text-xl mb-10">{parrafo}</p>
    </>
  );
};
export default TituloPersonaje;
