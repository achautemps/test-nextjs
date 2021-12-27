import { useState } from 'react';

export default function Movies({ movies, onClickLoadMore }) {
  const [filter, setFilter] = useState('');
  function onFilter(e) {
    setFilter(e.target.value.toLowerCase());
  }
  return (
    <>
      <section className='c-movies'>
        <ul>
          {movies.results
            .filter((movie) => movie.title.toLowerCase().includes(filter))
            .map((movie) => (
              <li key={movie.id}>
                {movie.title}
              </li>
            ))}
        </ul>
        {movies.page < movies.total_pages ? (
          <div className='movies__more'>
            <span className='button' onClick={onClickLoadMore}>
              {' '}
              Voir Plus
            </span>
          </div>
        ) : null}
      </section>
      <style jsx>{`
        .movies {
          &__more {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
