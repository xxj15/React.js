// 단락평가 : &&나 ||의 논리연산자에서 첫번째 피연산자의 값만으로도 결과 정할 수 있으면 두번쨰 피연산자의 값에는 접근 X
// ex) let varA = false
// console.log(varA && varB); -> varA가 false이므로 무조건 false

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // 인수로 undefined 전달했기 때문에 두번째 피연산자에 접근 X
// name = person = undefined가 됨.
// name = undefined, || 두번째 문자열은 Truthy한 값.
// Truthy한 값이 출력됨. "person의 값이 없음"

printName({ name: "sj" }); // 정상적인 객체 전달.
// person의 값이 Truthy하기 때문에 두번째 값인 person.name = "sj"이 잘 저장됨
// 다음 줄에서 둘 다 Truthy하니까 첫번째 Truthy한 값이 반환됨.
// sj 프린트됨!

// 기억할 것!
// T || T : 첫번째 Truthy한 값 반환
// T && T : 두번째 Truthy한 값 반환
