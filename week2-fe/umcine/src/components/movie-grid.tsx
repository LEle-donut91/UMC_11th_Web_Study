import type { Movie } from '../types/movie';
import MovieCard from './movie-card';

interface MovieGridProps {
  movies: Movie[];
  onToggleBookmark: (id: number) => void;
}

export default function MovieGrid({ movies, onToggleBookmark }: MovieGridProps) {
  return (
    <section className="movie-grid-section">
      <h1 className="section-title">영화 목록</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onToggleBookmark={onToggleBookmark}/>
        ))}
      </div>
    </section>
  );
}
