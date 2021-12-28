import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

function Movie({ movie }) {
  return (
    <>
      <div className='c-movie'>
        <Link href={'/movies/' + movie.id}>
          <a title={movie.title}>
            <div className='c-movie__img'>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Affiche du film : ${movie.title}`}
                layout='fill'
                placeholder='blur'
                blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              />
            </div>
            <h2 className='c-movie__title || title'>{movie.title}</h2>
            <p>{movie.id}</p>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .c-movie {
          width: 100%;
          &__img {
            width: 100%;
            position: relative;
            padding-top: 150%;
            box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
          }
          &__title {
            text-overflow: ellipsis;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
}

export default memo(Movie);
