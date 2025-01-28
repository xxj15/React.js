// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "seojin",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

// 메서드 : 동작을 관리
// 메서드 호출
person.sayHi(); // 콘솔에 "안녕!" 뜸뜸
person["sayHi"](); // 괄호표기법을 이용해서도 호출 가능!
