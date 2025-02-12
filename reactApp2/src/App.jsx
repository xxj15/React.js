// esModule system
import "./App.css";
import { useState } from "react";
// state값 기준 - 컴포넌트별로 분리하면 불필요한 리렌더링 발생 x
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
