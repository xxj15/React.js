// 6가지의 요소 조작 메서드

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); // push메서드는 변경된 배열의 길이를 반환함
// newLength = 7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // console.log(poppedItem) = 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// arr4 = [0, 1, 2, 3], newLength2 = 4

// shift나 unshift는 pop, push보다 느리게 동작함 (비효율적임)
// 되도록 push나 pop 사용하는게 좋음

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 원본 배열은 안바뀜
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [3, 4, 5]
let sliced2 = arr5.slice(2); // [3, 4, 5]
let sliced3 = arr5.slice(-3); // [3, 4, 5]

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
