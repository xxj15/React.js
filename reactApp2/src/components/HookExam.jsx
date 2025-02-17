import useInput from "./../hooks/useInput";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다 (조건문이나 반복문 내부에서 호출 X)
// 3. 나만의 훅 (Custom Hook) 직접 만들 수 있다.

// const state = useState(); - 에러

// 이러한 input처럼 컴포넌트마다 반복적으로 동작하는 로직이 있고,
// 해당 로직이 useState와 같은 hook을 사용하는 로직이라면
// custom Hook 만들어서 분리해주는게 좋음

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  // 커스텀 훅을 통해서 컴퍼넌트 내부에 반복되는 로직을,
  // 그리고 훅을 사용하는 로직을 분리할 수 있다.
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
