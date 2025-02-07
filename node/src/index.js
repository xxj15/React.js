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

// console.log(add(1, 2));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// 잠깐 헷갈려서 정리 - const color?
// const color -> color은 변수. 하지만, 재할당 불가능한 변수
// const color = "red";
// color = "blue";  // ❌ 오류 발생! (Assignment to constant variable.)

// 객체나 배열 같은 참조 타입이면 내부 속성은 변경 가능
// let은 재할당 가능.
