import Head from 'next/head'
import { useState } from 'react'
import Api from '../lib/proxy-api'
import Movies from '../components/movies';

export default function Home({initialMovies}) {
  const [movies, setMovies] = useState(initialMovies)
  function onClickLoadMore() {
    Api.getAll(movies.page + 1)
      .then(({ results, page }) => {
        setMovies((state) => ({
          ...state,
          page: page,
          results: [...state.results, ...results],
        }));
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="container">
      <Head>
        <title>Test Next.js Alex Chautemps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Movies movies={movies} onClickLoadMore={onClickLoadMore} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const initialMovies = await Api.getAll()
  return {
    props: {
      initialMovies,
    }
  }
}
