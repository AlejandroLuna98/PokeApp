import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import FavoriteCardPokemon from './FavoriteCardPokemon';

type FavoritePokemonsProps = {
  pokemons: number[];
};

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
