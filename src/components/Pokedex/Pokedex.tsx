import { useState } from "react";
import ViewBoxSVG from "../svg/viewBoxSVG";

export default function Pokedex() {
  const [state, setState] = useState({
    pokemonInfo: [],
    showInfo: false,
    responseStatus: 0,
    imageUrl: "",
  });
  const spriteUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home";
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  function getInfo(id: number) {
    if (id) {
      fetch(`${apiUrl}/${id}`).then((response) => {
        console.log(response);
      });
    }
  }
  return (
    <div className="pokedex inline-flex flex-row m-auto w-9/12">
      <div className="view-pokemon inline-block mt-8">
        <ViewBoxSVG imageUrl={imageUrl} />
      </div>
    </div>
  );
}
