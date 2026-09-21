import tmdbLogoImg from "/images/logos/tmdb-logo.svg";

export default function Footer() {
  return (
    <>
      <img src={tmdbLogoImg} alt="TMDB 로고" />
      <span>This Product uses the TMDB API but is not endorsed or certified by</span><a href="https://www.themoviedb.org/" target="_blank">TMDB</a>
    </>
  );
}
