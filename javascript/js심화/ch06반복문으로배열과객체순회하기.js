// for of는 배열에만 쓸 수 있고, for in은 객체에만 사용 가능.

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스 - idx를 통한 활동 가능
for (let i = 0; i < arr.length; i++) {
  // length : 배열의 길이 저장
  // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  // 1, 2, 3이 출력됨됨
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "sj",
  age: 26,
  hobby: "베이킹",
};

// 2.1 Object.keys 내장함수 사용
// -> 객체에서 'key 값들만 뽑아서' 새로운 배열로 반환
let keys = Object.keys(person);
//console.log(keys)하면 ['name', 'age', 'hobby'] 나옴

for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  //   console.log(value);
}

// 2.3 for in - 객체만을 위해 존재하는 특수한 반복문
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
