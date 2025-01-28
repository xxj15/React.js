// js에서는 참이나 거짓을 의미하지 않는 값도, 조건문 ㅐ에서 참이나 거짓으로 평가하는 경우가 있음.

// 1. Falsy한 값 : 거짓같은 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; // Not a Number
let f6 = ""; // 빈 문자열
let f7 = 0n;

// 2. Truthy 한 값 : 참같은 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; // 배열, 빈 배열열
let t4 = {}; // 객체
let t5 = () => {}; // 화살표 함수

// 3. 활용 사례
function printName(person) {
  // 매개변수로 객체 받으려는 경우에는, 이렇게 조건문으로 1차 걸러지는 과정있는게 좋음
  // 그러면 undefined, null 등이 들어가도 오류 없이 진행
  if (!person) {
    // 객체 받음 - 객체는 Truthy
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "sj" }; // 겍체
printName(person);
