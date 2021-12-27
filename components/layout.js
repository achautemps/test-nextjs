import Grid from './debug-grid';
export default function Layout({ children, show_debug_grid }) {
  return (
    <main>
      {show_debug_grid && <Grid />}
      <div className='o-container'>{children}</div>
    </main>
  );
}
