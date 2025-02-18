import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value); // setCount : 비동기로 처리
  };

  // 리액트의 state는 비동기로 업데이트가 되기 때문에 변경된 state를 바로 사용해서
  // sideEffect에 해당하는 부가적인 작업을 하기 위해서는
  // setCount(count + value);
  // console.log(count) 이런식으로 하면 안되고
  // useEffect를 이용해야한다.
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
