import umcineImg from "/icons/movie.svg";
import searchIcon from "/icons/search.svg";

export default function Header() {
  return (
    <>
      <button>
        <img src={umcineImg} alt="로고 이미지" />
        <h3>UMCine</h3>
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
