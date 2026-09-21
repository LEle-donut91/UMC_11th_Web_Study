import tmdbLogoImg from "/images/logos/tmdb-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={tmdbLogoImg} alt="TMDB 로고" className="tmdb-logo" />
        <span className="footer-text">
          This product uses the TMDB API but is not endorsed or certified by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            className="footer-link"
          >
            TMDB
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
