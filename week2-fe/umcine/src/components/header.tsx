import umcineImg from "/icons/movie.svg";
import searchIcon from "/icons/search.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button type="button" className="logo-btn">
            <div className="logo-img-container">
              <img src={umcineImg} alt="로고 이미지" className="logo-img" />
            </div>
            <h3 className="logo-title">UMCine</h3>
          </button>
          <nav className="nav-menu">
            <button type="button" className="nav-item">영화</button>
            <button type="button" className="nav-item">검색</button>
            <button type="button" className="nav-item">내 정보</button>
          </nav>
        </div>
        <div className="header-right">
          <button type="button" className="icon-btn" aria-label="검색">
            <img src={searchIcon} alt="검색 아이콘" />
          </button>
          <button type="button" className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  );
}
