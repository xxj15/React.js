import { useState } from "react";

// 자식 컴포넌트들은 부모로부터 받는 props의 값이 바뀌게 되면 리렌더링됨.
// count버튼을 눌렀는데도 bulb 컴포넌트가 리렌더링 되는 것을 확인할 수 있었다.
const Bulb = () => {
  const [light, setLight] = useState("Off");
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
