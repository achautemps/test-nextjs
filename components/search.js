export default function Search({ handleChange }) {
  return (
    <>
      <div className='search'>
        <input
          className='search__input'
          onChange={handleChange}
          placeholder='Search'
        />
      </div>
      <style jsx>{`
        .search {
          padding: 0 calc(var(--gutter) * 2);
          &__input {
            border-radius: 50px;
            padding: 0.5rem;
            border: 1px solid black;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
