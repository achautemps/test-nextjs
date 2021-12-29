export default function Footer() {
  return (
    <>
      <footer className='c-footer || o-flex -vcenter -center'>
        <p>
          <a
            href='https://github.com/achautemps/test-nextjs'
            target='_blank'
            rel='noreferrer'
          >
            Alexandre Chautemps
          </a>
        </p>
      </footer>
      <style jsx>{`
        @import '../styles/shared';
        .c-footer {
          position: absolute;
          background: var(--sub-bg-color);
          padding: rem(32);
          margin-top: rem(16);
          text-align: center;
          height: rem(100);
          bottom: 0;
          width: 100%;
          p {
            color: var(--content-color);
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
