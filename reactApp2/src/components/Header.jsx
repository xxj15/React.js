// 헤더 컴포넌트 = 함수 컴포넌트(화살표함수로 만들어도 됨.)
// 주의: 컴포넌트를 생성하는 함수의 이름은 반드시 첫글자가 '대문자' !!

// 모듈화를 위해 주로 파일 분리해서 컴포넌트 작성함.
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

export default Header;
