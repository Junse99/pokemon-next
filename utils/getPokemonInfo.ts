import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`, {headers: { "Accept-Encoding": "gzip,deflate,compress" } });
    return  {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
  } catch (error) {
    return null
  }
}