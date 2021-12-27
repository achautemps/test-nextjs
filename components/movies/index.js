import { useState } from 'react';
import Movie from './movie-item';
import Search from '../search';

export default function Movies({ movies, onClickLoadMore }) {
  const [filter, setFilter] = useState('');
  function onFilter(e) {
    setFilter(e.target.value.toLowerCase());
  }
  console.log(movies);
  return (
    <>
      <section className='c-movies'>
        <Search handleChange={onFilter} />
        <ul className='o-flex -center -wrap -gutter'>
          {movies.results
            .filter((movie) => movie.title.toLowerCase().includes(filter))
            .map((movie) => (
              <li className='o-col-4 -md-3 -l-2' key={movie.id}>
                <Movie movie={movie} />
              </li>
            ))}
        </ul>
        {movies.page < movies.total_pages ? (
          <div className='c-movies__more'>
            <span className='button' onClick={onClickLoadMore}>
              {' '}
              Voir Plus
            </span>
          </div>
        ) : null}
      </section>
      <style jsx>{`
        .c-movies {
          &__more {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
