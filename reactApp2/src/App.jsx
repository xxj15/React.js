import "./App.css";
import Header from "./components/Header"; // esModule system
// import Header from "./components/Header.jsx";
// esModule 썼음에도 vite로 만든 리액트 앱에서는 파일의 확장자 안써줘도 된다.
import Main from "./components/Main";
import Footer from "./components/Footer";

// react에서는 js 함수가 html 태그를 반환하도록 할 수 있고, 이를 component라고 부름
// 따라서 아래의 것은 앱 컴포넌트
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <h1>안녕 리액트</h1>
    </>
  );
}

// Header태그를 추가해줘야, App 컴포넌트가 렌더링될 때 Header 컴포넌트의 반환값을 받아와서 함께 렌더링시켜줌.
// Header - App : 자식 - 부모 컴포넌트 관계

// 리액트의 모든 컴포넌트는 화면에 렌더링되기 위해 App 컴포넌트의 자식 컴포넌트로써 존재해야 함.
// App 컴포넌트를 최상위 계층 (조상) = 뿌리 컴포넌트

export default App;
