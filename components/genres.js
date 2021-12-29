export default function Genres({ genres }) {
  if (genres.length > 1) {
    return (
      <>
        <ul className='o-flex || c-genres'>
          {genres.map((genre) => (
            <li className='c-genres__item' key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
        <style jsx>{`
          @import '../styles/shared';
          .c-genres {
            &__item {
              padding: rem(4);
              border-radius: rem(8);
              font-size: rem(9);
              margin-right: rem(4);
              background: var(--sub-bg-color);
              color: var(--content-color);
              @include large-up {
                font-size: rem(14);
                padding: rem(8);
                margin-right: rem(8);
                border-radius: rem(10);
              }
            }
          }
        `}</style>
      </>
    );
  }
  return null;
}
