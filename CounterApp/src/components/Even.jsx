// useEffect 이용해서 Even 컴포넌트가 unmount되는 시점 제어해보기
import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 : useEffect가 끝날 때 실행됨.

    return () => {
      console.log("unmount");
    }; // 종료될 때 실행됨. (even컴포넌트가 화면에서 사라질 때 unmount 뜸)
  }, []); // 마운트 될 때 실행됨

  return <div>짝수</div>;
};

export default Even;
