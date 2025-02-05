// 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수
// 복습
function main(value) {
  // value라는 매개변수에는 sub라는 함수가 들어옴.
  value(); // value 매개변수에 저장된 함수를 main함수 안에서 호출시킬 수 있음.
}

function sub() {
  console.log("sub");
}

main(sub);

// callback함수 예시
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// add 함수 호출 -> setTimeout 실행 -> 타이머 3초
// -> 3초 뒤에 실행된 callback함수에서 sum 값 계산한 후에, 매개변수로 받은 callback함수를 안에서 다시 호출
// 값을 전달 -> 3의 값이 console에 출력

// 결론: 비동기작업을 하는 함수의 결과값을 함수 외부에서 이용하고 싶다면 callback함수를 사용해서
// 비동기함수 안에서 callback함수를 호출하도록 설정!

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 3초 뒤 떡볶이 -> 2초 뒤 식은 떡볶이 -> 1.5초 뒤 냉동된 식은 떡볶이
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 이런식으로 작성하면 indent가 너무 많이 생김
// 가독성 안좋아짐
// callback 지옥!
