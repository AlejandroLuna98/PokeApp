import { Spacer, Text, useTheme } from '@nextui-org/react';
import { Link as LinkUI } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

export const Navbar = (props: Props) => {
  const { theme, isDark } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        background: theme?.colors.gray200.value,
      }}
    >
      <Link href="/" passHref>
        <LinkUI css={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
            }
            alt="App icon"
            width={60}
            height={60}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </LinkUI>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" passHref>
        <LinkUI>
          <Text color="white">Favoritos</Text>
        </LinkUI>
      </Link>
    </div>
  );
};
