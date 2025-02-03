// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // 메서드에 인수로 콜백함수
  //   console.log(idx, item * 2);
});
// 0 2
// 1 4
// 2 6

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2); // [2, 4, 6]
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
//let arr3 = [1, 2, 3];
//let index = arr3.indexOf(2); // 1
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2); // 0
let index1 = arr3.indexOf(20); // -1  (존재하지 않음)

// let objectArr = [
//   { name: "이정환" },
//   { name: "홍길동" },
// ];

// console.log(
//   objectArr.indexOf({ name: "이정환" })
// ); -> 못찾음 (얕은비교하기 때문) - 프로퍼티를 비교 X

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "이정환"
//   ) item.name이라는 프로퍼티 값을 기준으로 비교하기 때문에 잘 작동
// );

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드

// let arr4 = [1, 2, 3];
// const findINdex = arr4.findINdex((item)=>{
//    if (item === 2) return ture;
//})
// findIndex = 1

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0 ); 조건식을 뒤에 적어줌

console.log(findedIndex); // -1

// indexOf vs findIndex
// indexOf : 배열에 원시타입 값이 아니라 객체타입 값 저장되어있으면 작동 X

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded); // {name : "이정환"} 객체 자체가 반환됨
