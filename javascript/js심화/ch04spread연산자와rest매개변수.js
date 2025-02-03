// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; 
let arr2 = [4, ...arr1, 5, 6]; // 배열 arr1의 모든 요소들을 배열로 풀어헤쳐라


let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1, // a : obj1.a , b : obj1.b랑 같은 말 
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3);
}

funcA(...arr1); // 함수를 호출하면서 인수로 arr1 배열의 값을 순서대로 전달 


// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수
// 여러개의 매개변수를 받아야 할 때, 배열 형태로 한방에 매개변수를 받아올 수 있게 해주는 매개변수 


function funcB(...rest) { // 한방에 모든 매개변수 받아옴
  console.log(rest); // 함수를 호출하면서 받아온 모든 변수들이 배열 형태로 저장됨
} // [1,2,3]

funcB(...arr1); 

// 첫 번째 매개변수는 다른 이름으로 받고 싶다 
function funcB(one, ...rest){
    console.log(rest) // 1은 one에 저장되고, [2,3]이 rest에 저장됨
} 

// rest 뒤에는 매개변수 추가 X (rest 매개변수가 마지막에!)

funcB(...arr1);