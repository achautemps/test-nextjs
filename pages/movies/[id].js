import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import Api from '../../lib/proxy-api';
import Genres from '../../components/genres';
import Actors from '../../components/actors';
import Modal from '../../components/modal';
import Rating from '../../components/rating';
import Layout from '../../components/layout';
import { formatDate } from '../../utils/date';

export default function Movie({ movie, actors }) {
  const modal = useRef();
  const rating = useRef();
  function handleClickRatingButton() {
    modal.current.toggleModal();
  }
  function handleCloseModal() {
    rating.current.reset();
  }
  console.log(movie);
  return (
    <>
      <Layout show_debug_grid={true}>
        <Head>
          <title>Découvrir : {movie.original_title}</title>
        </Head>
        <section className='p-movie'>
          <div className='o-flex -s-gutter -wrap'>
            <div className='o-col-12 -s-5 -md-4'>
              <div className='p-movie__bg'>
                <Link href='/'>
                  <a className='p-movie__back'>&#8249;</a>
                </Link>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`Affiche du film : ${movie.title}`}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center top'
                />
              </div>
            </div>
            <div className='o-col-12 -s-7 -md-8'>
              <div className='p-movie__content'>
                <div className='p-movie__head'>
                  <Genres genres={movie.genres} />
                  <h1>{movie.original_title}</h1>
                  <p>{movie.overview}</p>
                  <p>{movie.vote_average} / 10</p>
                  <p>{formatDate(movie.release_date)}</p>
                  <button
                    onClick={handleClickRatingButton}
                    className='button -tiny l-movie__rating'
                  >
                    Donner une note au film
                  </button>
                </div>
                <Actors actors={actors.cast} />
              </div>
            </div>
          </div>
          <Modal
            ref={modal}
            ariaHidden='true'
            size='tiny'
            onClose={handleCloseModal}
          >
            <Rating ref={rating} movie={movie} />
          </Modal>
        </section>
      </Layout>
      <style jsx>{`
        @import '../../styles/shared';
        .p-movie {
          width: 100%;
          &__bg {
            border-radius: 0 0 rem(8) rem(8);
            position: relative;
            padding-top: 70%;
            overflow: hidden;
            @include small-up {
              padding-top: 150%;
              overflow: hidden;
              border-radius: rem(8);
            }
          }
          &__back {
            position: absolute;
            color: $bg-color;
            top: rem(8);
            left: rem(12);
            z-index: 2;
            width: rem(20);
            font-size: rem(50);
            line-height: rem(40);
            text-shadow: 0px 0px 3px $dark-grey;
            transition: transform 0.25s ease-in-out;
            &:hover {
              transition: transform 0.25s ease-in-out;
              transform: translate3d(rem(-4), 0, 0);
            }
          }
          &__head {
            @include x-small-only {
              background: var(--bg-color);
              border-radius: rem(10);
              padding: rem(16);
              box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
              max-width: 300px;
              margin: 0 auto;
            }
          }
          &__content {
            @include x-small-only {
              padding: rem(8);
              margin-top: rem(-64);
              position: relative;
              z-index: 2;
            }
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!context.params.id) {
    return {
      notFound: true,
    };
  }

  const { movie, actors } = await Api.getMovieDetails(context.params.id);

  return {
    props: {
      movie,
      actors,
    },
  };
}
