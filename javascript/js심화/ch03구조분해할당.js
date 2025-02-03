// 1. 배열의 구조 분해 할당
// let one = arr[0];
// let two = arr[1]; // 이런식으로 하는건 불편!
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr; // one =1, two =2, three = 3 할당됨 


// 2. 객체의 구조 분해 할당
let person = {
  name: "sj",
  age: 26,
  hobby: "베이킹",
};
// 각각 객체의 프로퍼티를 key 값을 기준으로 객체에 저장 가능 
// let {name, age, hobby, extra } = person ; 

// 할당받는 변수의 이름을 변경 가능 
let { age: myAge, hobby, name, extra = "hello" } = person;


// 객체의 구조 분해 할당 : 함수에다가 여러 개의 인수를 전달할 때 자주 사용
// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); // 인수로 방금 만든 person 객체 넣어줌줌
