import React from "react"

const Footer=()=>{
return(
    <footer className="w-full flex flex-col items-center justify-center gap-3 bg-gray-800 h-[30dvh] text-white">
        <h3>CARACTERS:XXX REINOS:XXX EPISODIOS:XXXX </h3>
        <h3>ESTADO DEL SERVIDOR 
            <span className="inline-block w-4 h-4 rounded-full bg-pink-500 ml-2 align-middle"></span>
        </h3>
        <a href="#" className="before:content-['</>By'] before:text-white text-pink-400"> : Juan David Sánchez && Edwar Felipe Cuellar</a>
    </footer>
);
};
export default Footer