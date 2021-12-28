import { useState, forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';

const Modal = ({ children, ariaHidden, size }, ref) => {
  const [isActive, setActive] = useState(false);
  function toggleModal() {
    setActive((state) => !state);
  }
  function onClickModal(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }
  useImperativeHandle(ref, () => {
    return { toggleModal };
  });
  return (
    <>
      <div
        aria-hidden={ariaHidden}
        className={clsx('overlay', { ' -active': isActive })}
        onClick={onClickModal}
      >
        <div className={clsx('c-modal', { [` -${size}`]: size })}>
          <div className='c-modal__close' onClick={onClickModal}>
            +
          </div>
          {isActive && children}
        </div>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100;
          display: none;
          align-items: center;
          justify-content: center;
          &.-active {
            display: flex;
          }
        }
        .c-modal {
          padding: 1rem;
          background: white;
          border-radius: 10px;
          width: 90%;
          max-width: 500px;
          position: relative;
          &.-tiny {
            max-width: 300px;
          }
          &__close {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            transform: rotate(-45deg);
            width: 1rem;
            height: 1rem;
            font-size: 1.5rem;
            line-height: 1rem;
            text-align: center;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

export default forwardRef(Modal);
