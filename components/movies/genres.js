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
          @import '../../styles/shared';
          .c-genres {
            &__item {
              padding: 0.25rem;
              border-radius: rem(8);
              font-size: rem(9);
              margin-right: 0.25rem;
              background: $lighter-grey;
            }
          }
        `}</style>
      </>
    );
  }
  return null;
}
