// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

// ts는 inference(추론)을 함 -> funciton name에 hover 시 type이 나온다.
// 아래와 같은 경우, void가 자동으로 반환되므로 :void를 적지 않아도 된다.
function run() {
  nullish();
  // optionalChaining();
}

function nullish() {
  // value가 없으면 100으로 초기화
  // let value = 0; // false
  let value; // undefined

  // 문제를 유발할 수 있는 좋지 못한 코드
  // let result = value || 100;
  let result: number | undefined = value || 100; // 타입 선언
  console.log("|| : ", result);

  // 유틸리티 함수 필요
  function isNullOrUndefined(value: unknown) {
    return value === null || value === undefined ? true : false;
  }

  result = !isNullOrUndefined(value) ? value : 100;
  console.log("isNullOrUndefined : ", result);

  // 코드를 작성합니다.
  // null 병합 연산자 활용
  // 사용자가 원하는 값을 초기값으로 쓰고 만약  undefined나 null일 경우 100으로 초기화
  result = value ?? 100;
  console.log("nullish : ", result);
}

// 사용자 정의 타입
type Topic = {
  _title: string;
  getTitle(): string;
  setTitle(value: string): void;
};
function optionalChaining() {
  const topic: Topic = {
    _title: "매년 업데이트 되는 ECMAScript",
    getTitle() {
      return this._title;
    },
    setTitle(value) {
      this._title = value;
    },
  };

  if (topic && typeof topic === "object" && !Array.isArray(topic)) {
    let title, name;
    if (typeof topic.getTitle === "function") {
      title = topic.getTitle();
    }
    if (typeof topic.getName === "function") {
      name = topic.getName();
    }
    console.log("typeof : ", title);
    console.log("typeof : ", name);
  }

  let title, name;
  // 코드를 작성합니다.
}

run();
