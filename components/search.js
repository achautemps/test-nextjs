export default function Search({ handleChange }) {
  return (
    <>
      <div className='search'>
        <input
          className='search__input'
          onChange={handleChange}
          placeholder='Filtrer les films'
        />
      </div>
      <style jsx>{`
        @import '../styles/shared';
        .search {
          padding: 0 calc(var(--gutter) * 2);
          &__input {
            border-radius: rem(8);
            padding: 0.5rem;
            border: 1px solid $light-grey;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
