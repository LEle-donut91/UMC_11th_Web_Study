import Header from './components/header';
import MovieGrid from './components/movie-grid';
import { movies } from './data/movies';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <MovieGrid movies={movies} />
      </main>
    </>
  );
}
