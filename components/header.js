import { useState } from 'react';
import Burger from './burger';
import Navigation from './navigation';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <header>
        <div className='o-container'>
          <div className='o-flex -spaceBetween -vcenter || c-header'>
            <p className='mainTitle'>
              <strong>Alexandre Chautemps</strong> <br />
              Test Next.js
            </p>
            <Burger handleClick={handleClick} />
            <Navigation handleClick={handleClick} isActive={isNavOpen} />
          </div>
        </div>
      </header>
      <style jsx>{`
        .c-header {
          padding: calc(var(--gutter) * 2);
        }
      `}</style>
    </>
  );
}
