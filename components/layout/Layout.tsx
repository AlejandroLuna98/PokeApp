import React, { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

type LayoutProps = {
  children: JSX.Element;
  title?: string;
};

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const origin = typeof window === 'undefined' ? '' : window.location.origin;

  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Alejandro Luna" />
        <meta name="description" content={title} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};
