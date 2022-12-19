import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import {useEffect, useState} from 'react';
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage: NextPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons() )
  }, [])
  

  return (
   <Layout>
    {
      favoritesPokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons pokemons={favoritesPokemons} />
    }
   </Layout>
  )
}

export default FavoritesPage;
