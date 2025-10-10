import { useState, useEffect } from "react";

const CardEpisodios = ({ props }) => {
  return (
      <article className="group bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:bg-yellow-100 hover:shadow-2xl hover:scale-105 hover:border-yellow-400 transition-all duration-300">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${props.image_path}`}
          alt={`Imagen del episodio ${props.name}`}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg text-gray-800 mb-1">{props.name}</h2>
          <p className="text-sm text-gray-500">
            Temporada {props.season} · Episodio {props.episode_number}
          </p>
          <p className="text-sm text-gray-400 mt-1">Fecha: {props.airdate}</p>
          <p className="text-xs text-gray-600 mt-2 italic">
            {props.synopsis?.slice(0, 100)}...
          </p>
        </div>
      </article>
  );
};

export default CardEpisodios;
