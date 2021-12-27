import Head from 'next/head';
import Link from 'next/link';
import Api from '../../lib/proxy-api';

export default function Movie({ movie }) {
  return (
    <>
      <Head>
        <title>Découvrir : {movie.original_title}</title>
      </Head>
      <section className='p-movie'>
        <h1>{movie.original_title}</h1>
        <Link href='/'>
          <a className='p-movie__back'>&#8249;</a>
        </Link>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!context.params.id) {
    return {
      notFound: true,
    };
  }

  const movie = await Api.getMovieDetails(context.params.id);

  return {
    props: {
      movie,
    },
  };
}
