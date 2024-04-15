// 공통처리 함수 JS - common.js

// 상단 메뉴 스크롤 이벤트 JS
import { headerScrollFn } from "./scroll.js";

// 상단 메뉴 데이터 JS
import * as header from "../data/header_data.js";

/****************************************************
 * 0. myFn 함수 생성
 *****************************************************/
const myFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

  // 바운딩위치값함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,
};

/****************************************************
 * 1. Header 전체영역 태그 및 데이터 넣기
 *****************************************************/

// 1.1 lnb 영역
// 1.1.0 lnb 클래스 선택 및 변수에 할당
const lnbTag = myFn.qs(".lnb");

// 1.1.1 lnbData 불러와 변수에 할당
const lnbData = header.lnbData;

// 1.1.2 lnb 태그 및 데이터 정상 출력 확인
// console.log("lnb 태그확인:", lnbTag, "\n", "lnb 데이터확인:", lnbData);

// 1.1.3. map 메서드로 순회하여 태그 및 데이터 삽입
lnbTag.innerHTML = `
<div class="inner">
  <nav class="top-menu">
    ${lnbData
      .map(
        (v) =>
          `
            <a href="#none"> ${v} </a>
          `
      )
      .join("")}
  </nav>
</div>
`;

// 1-2 header-info 영역
// 1.2.0 header-info 클래스 선택 및 변수에 할당
const hInfoTag = myFn.qs(".header-info");

// 1.2.1 lnb 태그 및 데이터 정상 출력 확인
// console.log("header-info 태그확인:", hInfoTag, "\n", "header-info 데이터확인:", header.hInfoData);

// 1.2.2. logo 데이터 변수에 할당
const logoImg = header.hInfoData.logoImg;

// 1.2.3. map 메서드로 순회하여 태그 및 데이터 삽입
hInfoTag.innerHTML = `
<div class="inner">
  <div class="cont-box">
    <div class="col-2 logo">
      <a href="#none">
        <img src="images/${logoImg}.png" />
      </a>
    </div>
    <div class="col-5 search">
      <input class="search-input" type="text" placeholder="검색어를 입력하세요" />
      <div class="search-icon"></div>
    </div>
    <div class="col-5 auth">
      <span class="login">
        <a href="#">로그인</a>
      </span>
      <span class="hr">|</span>
      <span class="register">
        <a href="#">회원가입</a>
      </span>
    </div>
  </div>
</div>
`;

// 1-3 gnb 영역
// 1.3.0 gnb 클래스 선택 및 변수에 할당
const gnbTag = myFn.qs(".gnb");

// 1.3.1 gnbData 불러와 변수에 할당
const gnbData = header.gnbData;

// 1.3.2 gnb 태그 및 데이터 정상 출력 확인
console.log("gnb 태그확인:", gnbTag, "\n", "gnb 데이터확인:", gnbData);

// console.log("tt", header.gnbData[0].submenu[1]); // 지역별
// console.log(
//   "dd",
//   gnbData.map((v, idx) => v.submenu[1])
// ); // 지역별

// 1.3.2. map 메서드로 순회하여 태그 및 데이터 삽입
// gnbTag.innerHTML = `
// <div class="inner">
//   <nav class="gnb-menu">
//     <ul>
//     ${gnbData.map(
//       (v) =>
//         `
//         <li>
//           <a href="#">${v.title}</a>
//           <!-- 서브메뉴 -->
//           <div class="smenu">
//             <ol>
//               <li>
//                 <a href="./page/subpage1.html">전체</a>
//               </li>
//               <li>
//                 <a href="#">지역별</a>
//               </li>
//               <li>
//                 <a href="#">분야별</a>
//               </li>
//             </ol>
//         </div>
//       </li>
//     </ul>
//     </nav>
//     </div>
//     `
//     )}
// `;

// 상단 메뉴 스크롤시 이벤트 효과 함수 불러오기
headerScrollFn();

export { myFn };
