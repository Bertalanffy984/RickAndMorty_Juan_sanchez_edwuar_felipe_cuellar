import React, { useState } from "react";
import icono_espadas from "../../assets/icono_espadas.png";

const Header = () => {
  return (
    <header className="w-full h-[10dvh] bg-gray-700 flex items-center justify-between text-white font-bold ">
      <img src={icono_espadas} alt="" className="h-full p-3" />
      <Lista/>
    </header>
  );
};
export default Header;

const Lista = () => {
  const [indice, setIndiceHovered] = useState(-1);
  const [isHovered, setHovered] = useState(false);
  let nombresBotones = ["Doc", "About"];
  return (
    <>
      <ul className="flex gap-4 mr-4 tracking-wider text-shadow-2xs sm:text-lg items-center">
        {nombresBotones.map((nombre, index) => (
          <a 
          onMouseEnter={()=>setIndiceHovered(index)}
          onMouseLeave={()=>setIndiceHovered(-1)}
          href="#" 
          key={nombre}>
            <li className={indice===index?'text-pink-500':''}> {nombre} </li>
          </a>
        ))}
        <a href="#"
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}
          className={`transition-all duration-300 ease-in-out ${
          isHovered? 'border-2 border-pink-400 bg-pink-400 px-2.5 py-2 rounded-3xl shadow-md shadow-black/100' :'border-2 border-pink-400 border-dotted px-2.5 py-2 rounded-3xl'
          }`}>
          <li>Support</li>
        </a>
      </ul>
    </>
  );
};
