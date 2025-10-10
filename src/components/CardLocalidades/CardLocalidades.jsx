import { useState, useEffect } from "react";

const CardLocalidades = ({ props }) => {
  return (
    <article className="group bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:bg-yellow-100 hover:shadow-2xl hover:scale-105 hover:border-yellow-400 transition-all duration-300">
        <img
        src={`https://cdn.thesimpsonsapi.com/500${props.image_path}`}
        alt={`Imagen de ${props.name}`}
        className="w-full h-56 object-cover"
        />
        <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-yellow-700 transition-colors duration-300">
                {props.name}
            </h2>
            <p className="text-sm text-gray-500">
                <b>Pueblo:</b> {props.town}
            </p>
            <p className="text-sm text-gray-500">
                <b>Uso:</b> {props.use}
            </p>
        </div>
    </article>
  );
};

export default CardLocalidades;
