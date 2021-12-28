import { useState, forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';

function useModal() {
  const [isActive, setIsActive] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  function toggle() {
    if (!isActive) {
      setShowChildren(!showChildren);
    }
    setIsActive(!isActive);
  }
  function handleTransitionEnd(e) {
    e.persist();
    if (showChildren && !isActive) {
      setShowChildren(!showChildren);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      toggle();
    }
  }
  return {
    showChildren,
    isActive,
    toggle,
    handleClick,
    handleTransitionEnd,
  };
}

const Modal = ({ children, ariaHidden, size }, ref) => {
  const { isActive, showChildren, toggle, handleClick, handleTransitionEnd } =
    useModal();

  useImperativeHandle(ref, () => {
    return { toggle };
  });
  return (
    <>
      <div
        aria-hidden={ariaHidden}
        className={clsx('overlay', { ' -active': isActive })}
        onClick={handleClick}
      >
        <div
          className={clsx('c-modal', { [` -${size}`]: size })}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className='c-modal__close' onClick={handleClick}>
            +
          </div>
          {showChildren && children}
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
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          pointer-events: none;
          align-items: center;
          justify-content: center;
          display: flex;
          &.-active {
            opacity: 1;
            transition: opacity 0.25s ease-in-out;
            pointer-events: auto;
          }
        }
        .c-modal {
          padding: 1rem;
          background: white;
          border-radius: 10px;
          width: 90%;
          max-width: 500px;
          position: relative;
          transform: scale(0);
          opacity: 0;
          transition: all 0.25s ease-in-out;
          .-active & {
            transform: scale(1);
            opacity: 1;
            transition: all 0.25s ease-in-out;
          }
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
