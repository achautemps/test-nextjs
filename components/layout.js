import Grid from './debug-grid';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, show_debug_grid }) {
  return (
    <>
      <Header />
      <main>
        {show_debug_grid && <Grid />}
        <div className='o-container'>{children}</div>
      </main>
      <Footer />
    </>
  );
}
