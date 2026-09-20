import logoImg from "/images/logos/tmdb-logo.svg";
import searchIcon from "/icons/search.svg";

export default function Header() {
  return (
    <>
      <button>
        <img src={logoImg} alt="로고 이미지" />
      </button>
      <button>영화</button>
      <button>검색</button>
      <button>내 정보</button>
      <button>
        <img src={searchIcon} alt="검색 아이콘" />
      </button>
      <button>로그인</button>
    </>
  );
}
