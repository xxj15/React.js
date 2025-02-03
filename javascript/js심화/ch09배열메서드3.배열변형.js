// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 콜백함수 이용

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// { name: "이정환", hobby: "테니스" },
// { name: "김효빈", hobby: "테니스" }

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// 콜백 함수 안에서 반환값 설정도 할 수 있음음
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
}); // [2, 4, 6]

// item의 name만 반환하게 하기
let names = arr1.map((item) => item.name); // ['이정환', '김효빈', '홍길동']

// 3. sort - 주의!!
// 배열을 사전순으로 정렬하는 메서드
// 배열이 문자, 문자열인 경우 정상작동동
let arr = ["a", "c", "b"];
arr.sort(); // ['a','b','c']

// 배열이 숫자인 경우 정상작동X (배열을 '사전순'으로 정렬하기 떄문문)
let arr3 = [10, 3, 5];

// 오름차순 정렬
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // sort 메서드에서 양수 반환하면 b, a
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // 음수 반환하면 a, b
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // 0 반환하면 유지지
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined);
