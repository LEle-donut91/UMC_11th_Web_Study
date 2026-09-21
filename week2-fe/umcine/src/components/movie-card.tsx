import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  onToggleBookmark: (id: number) => void;
}

export default function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <img
          src={movie.posterPath}
          alt={`${movie.title} 포스터`}
          className="poster-img"
        />
        <button
          type="button"
          className={`bookmark-btn ${movie.isBookmarked ? "active" : ""}`}
          onClick={() => onToggleBookmark(movie.id)}
        >
          {movie.isBookmarked ? (
            <img
              src="/icons/bookmark.svg"
              alt="북마크된 영화"
              className="bookmark-icon"
            />
          ) : (
            <img
              src="/icons/bookmark-outline.svg"
              alt="북마크 안 된 영화"
              className="bookmark-icon"
            />
          )}
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.releaseDate}</p>
      </div>
    </article>
  );
}
