import clsx from 'clsx';
import Link from 'next/link';
import Mode from './mode';

export default function Navigation({ isActive, handleClick }) {
  return (
    <>
      <nav className={clsx('c-nav', { ' -active': isActive })}>
        <div className='c-nav__close' onClick={handleClick}>
          +
        </div>
        <div className='c-nav__category'>
          <h2 className='c-nav__title'>Pages</h2>
          <ul className='c-nav__list'>
            <li>
              <Link href='/'>
                <a
                  className='o-flex -vcenter'
                  title="Aller à la page d'accueil"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 45.56 45.56'
                  >
                    <path d='M14.43 18.15v13.74a.71.71 0 0 0 .64.76h15.42a.7.7 0 0 0 .64-.76V18.15L22.78 13Z' />
                    <path d='M22.78 0a22.78 22.78 0 1 0 22.78 22.78A22.81 22.81 0 0 0 22.78 0Zm11.28 19.05a.76.76 0 0 1-.65.36.79.79 0 0 1-.39-.11l-.37-.22v12.81a2.22 2.22 0 0 1-2.16 2.28H15.07a2.22 2.22 0 0 1-2.16-2.28V19.08l-.36.22a.76.76 0 1 1-.79-1.3l10.63-6.5a.75.75 0 0 1 .79 0L33.81 18a.76.76 0 0 1 .25 1.05Z' />
                  </svg>
                  Accueil
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='c-nav__category'>
          <h2 className='c-nav__title'>Réseaux</h2>
          <ul className='c-nav__list'>
            <li>
              <a
                className='o-flex -vcenter'
                href='https://github.com/achautemps/'
                target='_blank'
                rel='noreferrer'
                title="Découvrir le profil Github d'Alexandre Chautemps"
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z' />
                </svg>
                Github
              </a>
            </li>
            <li>
              <a
                className='o-flex -vcenter'
                href='https://www.linkedin.com/in/alexandre-chautemps-6b077583/'
                target='_blank'
                rel='noreferrer'
                title="Découvrir le profil Linkedin d'Alexandre Chautemps"
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
                  <path d='M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z' />
                </svg>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className='c-nav__mode'>
          <Mode />
        </div>
      </nav>
      <style jsx>{`
        @import '../styles/shared';
        .c-nav {
          $this: &;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 1000;
          min-height: 100vh;
          width: 200px;
          padding: rem(32);
          text-align: center;
          transform: translate3d(100%, 0, 0);
          transition: transform 0.5s $ease;
          background: var(--bg-color);
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;

          &.-active {
            transform: translate3d(0, 0, 0);
          }
          &__close {
            $size: rem(25);
            font-size: rem(20);
            cursor: pointer;
            position: absolute;
            right: rem(10);
            transform: rotate(45deg);
            top: rem(10);
            width: $size;
            height: $size;
            line-height: $size;
            text-align: center;
            border-radius: 100%;
            background: transparent;
            transition: background 0.25s $ease;
            &:hover {
              background: var(--sub-bg-color);
              transition: background 0.25s $ease;
            }
          }
          &__category {
            text-align: left;
          }
          &__title {
            font-family: $title-font-family;
            color: var(--sub-content-color);
            font-size: rem(14);
            font-weight: 400;
            margin-bottom: rem(8);
          }
          &__mode {
            margin-top: auto;
          }
          &__list {
            margin: 0;
            list-style: none;
            overflow: hidden;
            li {
              color: var(--content-color);
              margin-bottom: rem(8);
              a {
                color: inherit;
                text-decoration: none;
                border-radius: rem(8);
                padding: rem(8);
                line-height: rem(20);
                background: transparent;
                transition: background 0.25s $ease;
                svg {
                  width: rem(20);
                  height: rem(20);
                  margin-right: rem(6);
                  * {
                    fill: var(--content-color);
                  }
                }
                &:hover {
                  background: var(--sub-bg-color);
                  transition: background 0.25s $ease;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
