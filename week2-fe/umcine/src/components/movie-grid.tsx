export default function MovieGrid() {
  return (
    <>
      <h1>영화 목록</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} />
      ))}
    </>
  );
}
