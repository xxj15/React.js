// 간단한 계산 기능을 만들어보겠음
// math 모듈

// 모듈 시스템을 이용해서 math 모듈에 작성한 add, sub 등 기능들을
// 바깥으로 내보내서 index.js 에서 불러와 사용할 수 있도록 함

// 방법1 - CJS (Common JS)
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  add,
  sub,
};
