import Head from 'next/head'
import { useState } from 'react'
import Api from '../lib/the-movie-database'

export default function Home({initialMovies}) {
  const [movies, setMovies] = useState(initialMovies)
  return (
    <div className="container">
      <Head>
        <title>Test Next.js Alex Chautemps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {movies.results.map(movie => (
          <div className="movie">
            {movie.title}
          </div>
        ))}
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
