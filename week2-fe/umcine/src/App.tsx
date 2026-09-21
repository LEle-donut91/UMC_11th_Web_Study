import { useState } from 'react';
import Header from './components/header';
import MovieGrid from './components/movie-grid';
import Pagination from './components/pagination';
import Footer from './components/footer';
import { movies as initialMovies } from './data/movies';

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);

  // 북마크 버튼 클릭 처리
  const handleToggleBookmark = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isBookmarked: !movie.isBookmarked } : movie
      )
    );
  };

  // 페이지네이션 계산
  const totalPages = Math.ceil(movies.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const currentMovies = movies.slice(startIndex, startIndex + 10);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <MovieGrid movies={currentMovies} onToggleBookmark={handleToggleBookmark} />
        {totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
