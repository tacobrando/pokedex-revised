import { useState } from "react";
export default function PokedexList(props: string) {
  const winHeight: number = window.innerHeight - 125;
  const [state, setState] = useState({
    pokedex: Array,
    nextPage: {
      type: String,
      default: "",
    },
  });
  return <ul className="pokedex-list"></ul>;
}
