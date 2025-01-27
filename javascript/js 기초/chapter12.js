// js에는 함수 선언 말고도 함수를 만드는 또 다른 방식이 있음 .

// => 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  //   console.log("funcB");
};

varB();

// 함수 표현식으로 부르면 호이스팅 안됨

//화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));

// 함수 표현 3가지
// 함수 선언, 함수 표현식, 화살표 함수
