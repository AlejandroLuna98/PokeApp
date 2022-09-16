import React, { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { Layout } from '../../components/layout';
import NoFavorites from '../../components/ui/NoFavorites';
import { FavoritePokemons } from '../../components/pokemon';

type Props = {};

const _favorites = (props: Props) => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémon - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default _favorites;
