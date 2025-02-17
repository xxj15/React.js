import { useState } from "react";

// 커스텀 훅 만드는 방법: 함수의 이름 앞에 use라는 키워드만 써주면 됨.
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
