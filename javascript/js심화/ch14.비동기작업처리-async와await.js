// async와 await : 프라미스를 좀 더 직관적이고 편하게 사용할 수 있도록 도와주는 기능들.

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// = 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData1() {
  return {
    name: "sj",
    id: "xxj15",
  };
}

console.log(getData()); // 콘솔창에 Promise 객체 반환됨.
// promise state : "fulfilled"
// promiseResult : name:"sj", id:"xxj15",

async function getData() {
  // 서버로부터 어떤 Data 받아오는 함수라고 가정.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "sj",
        id: "xxj15",
      });
    }, 1500);
  });
}
// 애초에 promise를 반환하는 비동기함수라면 async가 효력X

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// await 사용하기 전 - then메서드 사용해야 함.
function printData() {
  getData().them((result) => {
    console.log(result);
  });
}

// awwait 사용 후
async function printData() {
  const data = await getData(); // promise의 비동기 작업이 종료되기까지 기다렸다가
  // 종료가 되면 결과값을 데이터 변수에 넣어줌.
  console.log(data);
}

printData();
