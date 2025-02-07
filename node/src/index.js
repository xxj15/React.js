console.log("안녕!");
// package.json에 "start": "node src/index.js"
// 위치 설정한 후에는 터미널에 npm run start

// 모듈 시스템
// 방법1 - CJS (Common JS)

// const moduleData = require("./math");
//const { add, sub } = require("./math"); // 객체의 구조분해 할당

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
//console.log(add(1, 2));
//console.log(sub(1, 2));

// 방법 2 - ESM
import mul, { add, sub } from "./math2.js"; // 반드시 확장자 (.js) 까지 붙여줘야함
// 기본값은 맘대로 이름 지정 가능

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(3, 2));
