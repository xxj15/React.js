// 강의에서 props 값이 없을 때, .toUpperCase()를 이용하면 아무것도 렌더링 되지 않는 문제를 해결하기 위해
// default값을 지정해주는 defaultProps를 사용하라고 했는데
// 이는 없어졌다고 한다..

// 구조분해할당 이용!
// props라는 객체를 매개변수로 받아서 특정 속성을 꺼내고 기본값도 설정하는 방법
const Buttons = ({ color = "black", text, children }) => {
  console.log("props:", { color, text });
  const colorText = color.toUpperCase(); // color 기본값이 항상 설정되므로 안전

  return (
    <button style={{ color }}>
      {text} - {colorText}
      {children}
    </button>
  );
};

export default Buttons;

// App.jsx에서
// <Button text={"메일"} /> 자식 컴포넌트에 이런식으로 props를 전달해주면
// 이 값들은 객체로 묶여서 자식 컴포넌트에 '매개변수'로 전달이 된다.
