import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Actors({ actors }) {
  if (!actors) return;
  return (
    <>
      <div className='c-actors'>
        <h2 className='c-actors__title || title'>Acteurs</h2>
        <Splide
          className='c-actors'
          options={{
            type: 'loop',
            perPage: 4,
            pagination: false,
          }}
        >
          {actors
            .filter((actor) => actor.popularity > 1)
            .map((actor) => (
              <SplideSlide key={actor.id} className='c-actors__item'>
                <div className='c-actor || o-center'>
                  <div className='c-actor__img'>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={`Photo de ${actor.name}`}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                      placeholder='blur'
                      blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                    />
                  </div>
                  <p>{actor.name}</p>
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
      <style jsx>{`
        @import '../styles/shared';
        .c-actor {
          padding: rem(8);
          &__img {
            position: relative;
            width: 100%;
            border-radius: rem(8);
            overflow: hidden;
            padding-top: 100%;
          }
        }
      `}</style>
    </>
  );
}
