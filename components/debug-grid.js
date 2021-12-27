export default function Grid() {
  return (
    <>
      <div className='c-grid'>
        <div className='c-grid__container o-flex'>
          {[...Array(12)].map((x, i) => (
            <div key={i} className='c-grid__item'></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @import '../styles/shared';
        .c-grid {
          width: 100%;
          left: 0;
          top: 0;
          height: 100%;
          position: fixed;
          pointer-events: none;
          z-index: 2000;

          &__container {
            max-width: $max-width;
            margin: 0 auto;
            height: 100%;
            padding: var(--gutter);
          }
          &__item {
            margin: var(--gutter);
            height: 100%;
            width: 8.33333%;
            background: rgba(red, 0.2);
          }
        }
      `}</style>
    </>
  );
}
