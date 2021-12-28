export default function Burger({ handleClick }) {
  return (
    <>
      <div className='c-burger o-flex -vcenter' onClick={handleClick}>
        Menu
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#000000'
          viewBox='0 0 48 48'
          width='48px'
          height='48px'
        >
          <path d='M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z' />
        </svg>
      </div>
      <style jsx>{`
        @import '../styles/shared';

        .c-burger {
          position: relative;
          cursor: pointer;
          padding: rem(8);
          border-radius: rem(8);
          svg {
            width: rem(20);
            height: rem(20);
            margin-left: rem(6);
          }
          &:hover {
            background: $lighter-grey;
            transition: background 0.25s $ease;
          }
        }
      `}</style>
    </>
  );
}
