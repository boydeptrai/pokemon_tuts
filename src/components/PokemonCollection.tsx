import React from 'react'
import { Pokemon } from '../interface'
import PokemonList from './PokemonList'
import './Pokemon.css'

interface Props {
    pokemons: Pokemon[]
}
const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons} = props
  return (
    <>
        <section className="collection-container">
            {pokemons.map((pokemon) =>{
                return (
                    <div>
                        <PokemonList 
                           key={pokemon.id}
                           name={pokemon.name}
                          id={pokemon.id}
                          image={pokemon.sprites.front_default}
                        />
                    </div>
                )
            })}
        </section>
    </>
  )
}

export default PokemonCollection