import Head from 'next/head';
import { useState } from 'react';
import Api from '../lib/proxy-api';
import Movies from '../components/movies';
import Layout from '../components/layout';

export default function Home({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(false);
  function onClickLoadMore() {
    setIsLoading(true);
    Api.getAll(movies.page + 1)
      .then(({ results, page }) => {
        setMovies((state) => ({
          ...state,
          page: page,
          results: [...state.results, ...results],
        }));
      })
      .catch((error) => console.error(error))
      .then(() => setIsLoading(false));
  }
  return (
    <div className='container'>
      <Head>
        <title>Test Next.js Alex Chautemps</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Movies
          movies={movies}
          isLoading={isLoading}
          onClickLoadMore={onClickLoadMore}
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const initialMovies = await Api.getAll();
  return {
    props: {
      initialMovies,
    },
  };
}
