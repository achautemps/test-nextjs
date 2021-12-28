import { useState } from 'react';
import clsx from 'clsx';
import Api from '../lib/proxy-api';
import Message from './message';

export default function Rating({ movie }, ref) {
  const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [rating, setRating] = useState(0);
  const [result, setResult] = useState(null);
  async function handleSubmit() {
    const res = await Api.movieRating(movie.id, rating);
    setResult({ ...res, rating });
  }
  function handleClickMark(mark) {
    setRating(mark);
  }

  return (
    <>
      <div className='c-rating'>
        <h2 className='title'>Donner une note au film</h2>
        <ul className='c-rating__list || o-flex -center -spaceBetween'>
          {marks.map((mark) => (
            <li
              className={clsx('c-rating__item', {
                ' -active': mark <= rating,
              })}
              key={mark}
              onClick={() => handleClickMark(mark)}
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.45 33.91'>
                <path
                  d='M34.41 13.12a1 1 0 00-.79-.64L22.91 11.4l-4.34-9.85a.92.92 0 00-1.69 0l-4.34 9.84-10.71 1.09a1 1 0 00-.79.64.93.93 0 00.27 1l8 7.17-2.26 10.5a.94.94 0 00.37.94.91.91 0 001 0l9.3-5.41 9.29 5.41a.93.93 0 001 0 1 1 0 00.37-1l-2.26-10.46 8-7.18a.91.91 0 00.29-.97z'
                  fill='none'
                />
              </svg>
            </li>
          ))}
        </ul>
        <button className='button' onClick={handleSubmit}>
          Noter
        </button>
        <Message result={result} />
      </div>
      <style jsx>{`
        @import '../styles/shared';
        .c-rating {
          text-align: center;
          padding: 0 rem(16);
          &__list {
            margin-bottom: rem(16);
          }
          &__item {
            width: rem(16);
            height: rem(16);
            display: block;
            cursor: pointer;
            svg {
              * {
                stroke: $light-grey;
                stroke-width: 3;
              }
            }
            &.-active {
              svg {
                * {
                  fill: $light-grey;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
