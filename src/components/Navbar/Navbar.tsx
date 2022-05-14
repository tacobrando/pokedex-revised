import pokeballSmallBlue from '../../images/navbar/pokeball-small-blue.png'
import pokemonSmall from '../../images/navbar/pokeball-small.png'
import pokeballDefault from '../../images/navbar/default.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar flex w-full">
      <div className="details flex justify-start items-center">
        <div className="deco flex w-2.5 h-2.5 m-2.5 justify-self-start self-end" />
        <div className="title flex justify-between items-center m-auto w-2/5 p-0.5">
          <img src={pokeballSmallBlue} />
          <span><h3>Pokédex</h3></span>
          <img src={pokeballSmallBlue} />
        </div>
        <div className="capture-details flex justify-center self-center w-2/5">
          <span className="caught flex justify-between items-center w-full" id="totalCaught">
            <img src={pokemonSmall} />
            <p>898</p>
          </span>
          <span className="caught flex justify-between items-center w-full" id="totalPokemon">
            <img src={pokeballDefault} />
            <p>898</p>
          </span>
        </div>
      </div>
      <div className="sortby flex justify-center items-center w-1/3">
        <div className="container flex justify-center self-center text-center w-4/5 h-1/2">
          <p className="m-auto">By Number</p>
        </div>
      </div>
      <div className="nav-deco flex justify-self-end self-end h-full">
        <div className="fill1" />
        <div className="fill2" />
        <div className="fill3" />
      </div>
    </div>
  )
}
