// math 모듈
// 방법 2 - ESM
// CJS보다 훨씬 최신식이여서 React에서도 사용!!

// package.json에 "type": "module",
// 앞으로 ES 모듈 시스템을 사용하겠다는 의미

//function add(a, b) {
//    return a + b;
//  }
//  function sub(a, b) {
//   return a - b;
//  }

//  export {add, sub};

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
} // math 모듈을 대표하는 기본 값 (default)
