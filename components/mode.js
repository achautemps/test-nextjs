import { useState } from 'react';
import clsx from 'clsx';

export default function Mode() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
    document.documentElement.classList.toggle('dark');
  }
  return (
    <>
      <div
        onClick={handleClick}
        className={clsx('c-mode', { ' -active': isActive })}
      >
        <span className='c-mode__track'></span>
        <span className='c-mode__label'>Changer le mode</span>
      </div>
      <style jsx>{`
        @import '../styles/shared';
        $height: rem(15);
        $width: rem(30);
        .c-mode {
          display: inline-flex;
          cursor: pointer;
          align-items: center;
          span {
            display: inline-block;
          }
          &__label {
            font-size: rem(12);
            line-height: rem(12);
          }
          &__track {
            width: $width;
            margin-right: rem(8);
            height: $height;
            border-radius: $height;
            background: var(--content-color);
            z-index: -1;
            transition: background-color 0.25s $ease;
            position: relative;
            &:before {
              background: var(--sub-bg-color);
              content: '';
              height: calc($height - rem(2));
              width: calc($height - rem(2));
              border-radius: 100%;
              position: absolute;
              left: rem(1);
              top: rem(1);
              transition: transform 0.25s $ease;
              .-active & {
                transform: translate3d(calc($width - $height), 0, 0);
                transition: transform 0.25s $ease;
              }
            }
          }
        }
      `}</style>
    </>
  );
}
