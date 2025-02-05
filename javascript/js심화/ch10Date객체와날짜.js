// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 - 지금 현재 시간 출력해줌.

let date2 = new Date(2000, 9, 21, 23, 59, 59); // 특정 날짜나 특정 시간으로 생성해줄 수 있음
// let date = new Date("2000-09-21")
// let date = new Date("2000/09/21")
// let date = new Date("2000.09.21")
// let date = new Date("2000/09/21/10:10:10") - 10시 10분 10초

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초" : UTC (세계 협정시)
let ts1 = date1.getTime();
let date4 = new Date(ts1); // ts1이랑 date4에 같은 값 저장됨.

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // js의 월은 0부터 시작함. 항상 getMonth메서드로 추출한 후에는 +1 해줘야 함.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // js의 월은 0부터 시작하니까 2 하면 3월임
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //Thu Mar 30 2023
console.log(date1.toLocaleString()); // 2023. 3. 39. 오후 11:59:59 (현지화된 형태)
