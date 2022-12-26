import { Button, Card, Grid, Row, Text } from "@nextui-org/react"
import { NextPage, GetServerSideProps, GetStaticProps } from "next"
import { pokeApi } from "../api";
import { Layout } from "../components/layouts"
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from '../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <a href="tel:555-123-4567">Marcar a pokémon</a>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151', {headers: { "Accept-Encoding": "gzip,deflate,compress" } });

  const pokemons: SmallPokemon[] = data.results.map( (pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))


  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
