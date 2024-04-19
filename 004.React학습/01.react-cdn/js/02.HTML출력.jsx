// HTML 출력 JSX

// 변수에 태그를 jsx문법으로 작성하여 할당한다!
// 주의사항) JSX는 최상위부모가 단 하나여야한다!(기본XML문법과 동일!)
// (기본XML문법과 동일!)
// JSX 태그 중간에 변수나 수식을 출력할때는 중괄호만 사용함!
// <div>{변수/표현식}</div>

// 배열 데이터 생성하기
const data = [
  { 이름: "김소영", 전화번호: "010-222-3333", 생일: "20.01.20" },
  { 이름: "전우치", 전화번호: "010-555-8888", 생일: "18.05.20" },
  { 이름: "강감찬", 전화번호: "010-666-5555", 생일: "21.02.03" },
  { 이름: "공유", 전화번호: "010-999-5555", 생일: "79.08.20" },
  { 이름: "김마리", 전화번호: "010-888-4578", 생일: "00.01.02" },
];

console.log("원본:", data);

// 위의 데이터를 사용하여 table>tr>td 태그 구성하여
// 코드를 작성한다!
// map() 메서드를 사용한다!
// 그런데 과연 이 함수는 JS순수함수인가?
// 아니다! 리액트의 map() 메서드는 리액트 전용임!
// 그래서 html태그를 화면에 출력할때 JS에서 했던
// join('') 메서드 사용을 하지 않아도
// 태그가 그대로 클린하게 출력된다!

const listCode = data.map((v) => (
  <tr>
    <td>
      {v.이름}
      {v.전화번호}
      {v.생일}
    </td>
  </tr>
)); ///////// map ///////////
console.log("map결과:", listCode);

// 화면출력하기 //////////
// ReactDOM.render(출력할요소,대상요소)
ReactDOM.render(<table>{listCode}</table>, document.querySelector("#root"));
