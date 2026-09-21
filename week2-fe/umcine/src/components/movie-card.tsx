import type { Movie } from '../types/movie';
import bookmarkedIcon from '/icons/bookmark.svg';
import unBookmarkedIcon from '/icons/bookmark-outline.svg';

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (id: number) => void;
}

export default function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <article>
      <img src={movie.posterPath} alt={`${movie.title} 포스터`} />
      <button type="button" onClick={() => onToggleBookmark(movie.id)}>
        {movie.isBookmarked ? (<img src={bookmarkedIcon} alt="북마크된 영화" />) : (<img src={unBookmarkedIcon} alt="북마크 안 된 영화" />)}
      </button>
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
    </article>
  );
}
