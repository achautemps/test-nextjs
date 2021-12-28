import Head from 'next/head';
import { useState } from 'react';
import Api from '../lib/proxy-api';
import Movies from '../components/movies';
import Layout from '../components/layout';

function useMovies(initialMovies) {
  const [movies, setMovies] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(false);

  function loadMore() {
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
  return {
    movies: movies.results,
    canLoadMore: movies.page < movies.total_pages,
    isLoading,
    loadMore,
  };
}

export default function Home({ initialMovies }) {
  const { movies, canLoadMore, isLoading, loadMore } = useMovies(initialMovies);
  return (
    <Layout>
      <Head>
        <title>Test Next.js Alex Chautemps</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Movies
        movies={movies}
        isLoading={isLoading}
        canLoadMore={canLoadMore}
        onClickLoadMore={loadMore}
      />
    </Layout>
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
