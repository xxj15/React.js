// Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 js의 내장 객체
// 날짜를 저장하는 Date 객체 같은거! (특수한 목적을 위해 존재하는 내장객체)

// Promise : setTimeout 함수와 같은 비동기 작업들을 랩핑함.

// Promise 객체의 역할이 정말 많음!!
// 가장 기본적인 기능
// 1. 비동기 작업 실행
// 2. 비동기 작업의 상태 관리
// 3. 비동기 작업 결과 저장

// 비동기 작업의 상태
// 대기(Pending) : 아직 작업이 완료되지 않은 상태 - 유튜브 영상 로딩중
// 성공 (Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패 (Rejected) : 비동기 작업이 실패된 상태

// add10함수 내에서 프로미스 객체 생성됨
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // promise 객체 생성자 new Promise
    // 비동기 작업 실행하는 함수
    // 콜백 함수를 특별히 비동기 작업을 실행하는 함수라는 의미에서 executor라고 부름.
    // executor 함수에는 두가지의 매개변수가 전달됨. - resolvedhk reject
    // resolve : 비동기 작업을 성공상태로 바꾸는 함수 (fulfilled)
    // reject : 비동기 작업을 실패 상태로 바꾸는 함수 (Rejected)

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // resolve함수에 결과값 넣어줘야 함.
      } else {
        reject("num이 숫자가 아닙니다"); // 실패한 이유 넘겨주기
      }
    }, 2000);
  });

  return promise; // add10함수가 프로미스 객체를 그대로 반환하도록 설정
}

// 정리
// Executor 함수에서 Reject를 호출하게 되면 프로미스의 비동기 작업이 실패하게 되는 것
// Resolve를 호출하게 되면 프로미스의 비동기 작업이 성공하게 되는 것.
// Resolve와 Reject 함수 모두 인수로 프로미스의 결과 값을 전달해줄 수 있다.

// promise chaining (catch와 then메서드 연결해서 사용하는 것)
// 프로미스가 콜백지옥을 방지하기 위해 제공하는 것
// then 메서드에서 return newP 라고 새로운 프로미스를 반환해주면,
// 반환된 프로미스 객체가 then 메서드 호출의 결과 값이 된다.
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  }) // 위에서 실행된 결과값이 아래에서 이어서 실행됨
  .then((result) => {
    console.log(result);
    return add10(undefined); // 어디에서 발생한 오류더라도
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // 마지막 catch 메서드가 실행돼서 "num이 숫자가 아닙니다"가 잘 출력됨
  });

// promise 객체의 then 메서드 : 비동기 작업이 성공했을 때만 호출됨!!
promise.then((value) => {
  console.log(value);
}); // 비동기 작업의 결과값을 언제든지 자유롭게 불러서 이용할 수 있음

// promise 객체의 catch 메서드 : 비동기 작업 실패시 호출됨!!
promise.catch((error) => {
  console.log(error); // "num이 숫자가 아닙니다"
});

// promise 객체는 JS에서 가장 중요하다고 볼 수 있음!!
// API를 호출한다거나, 다른 서버와 통신한다거나 이런 작업에서 promise 객체가 굉장히 활발하게 사용됨.
