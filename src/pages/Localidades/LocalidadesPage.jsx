import CardLocalidades from "../../components/CardLocalidades/CardLocalidades";
import TituloPersonaje from "../../components/TituloPersonaje/TituloPersonaje";
import Paginacion from "../../components/Paginacion/Paginacion";
import { useState, useEffect } from "react";

const LocalidadesPage = () => {
const [localidades, setLocalidades] = useState([]);
const [page, setPage] = useState(1);

    useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
        .then((res) => res.json())
        .then((data) => setLocalidades(data.results))
        .catch((e) => console.error(e.message));
    }, [page]); 

    return (
    <>
    <TituloPersonaje
    titulo="Lugares de Los Simpsons"
    parrafo="Explora las ubicaciones más icónicas de Springfield"
    />

    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 p-6">
        {localidades.map((loc) => (
            <CardLocalidades key={loc.id} props={loc} />
        ))}
    </div>

    <div className="flex justify-center py-10">
        <Paginacion
            count={5}
            page={page}
            onChange={(event, value) => setPage(value)}
            variant="outlined"
        />
    </div>
    </>
);
};

export default LocalidadesPage;