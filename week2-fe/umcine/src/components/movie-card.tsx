import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article>
      <img src={movie.posterPath} alt={`${movie.title} 포스터`} />
      <button type="button">
        {movie.isBookmarked ? '북마크 취소' : '북마크'}
      </button>
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
    </article>
  );
}
