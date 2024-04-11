/* 공통 함수 불러오기 */
import common from "./common_func.js";

/* Header 데이터 불러오기 */
import * as header from "../data/header_data.js";

/* 레슨 데이터 불러오기 */
import * as lesson from "../data/lesson_data.js";

/****************************************************
 * 1. Header 공통 영역 데이터 넣기
 *****************************************************/

// 1-0 데이터 출력확인
console.log(header.lnbData);
const lnbTag = common.qs(".lnb");

// 1-1 lnb 데이터 map 메서드로 순회하여 대입하기
lnbTag.innerHTML = `
<div class="inner">
  <nav class="top-menu">
    ${header.lnbData
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

/****************************************************
 * 2. 구인정보 -> 전체 페이지 상단 채용정보 데이터 넣기
 *****************************************************/

// 2-0 데이터 출력확인
// console.log(lesson.jobSummaryInfoData);

// 2-1 jobSummaryInfoData 배열 데이터 불러오기
const data = lesson.jobSummaryInfoData;

// 2-2 jobSummaryInfoData 삽입할 태그 불러오기
const dlElements = common.qsa(".job-info-summary-tc dl");
console.log(dlElements);

// 2-3 html code 삽입 변수 초기화
let hcode = "";

// 2-4 데이터를 개별적으로 처리하여 각 dl에 추가
// 첫 번째 dl에 첫 번째 데이터 추가
hcode = `
    <dt>
        <span class="job-info-summary-title">${data[0].alljob}</span>
    </dt>
    <dd>
        <span class="job-info-summary-count">${data[0].count}</span>
    </dd>`;

dlElements[0].innerHTML += hcode;

// 두 번째 dl에 두 번째 데이터 추가
hcode = `
    <dt>
        <span class="job-info-summary-title">${data[1].alljob}</span>
    </dt>
    <dd>
        <span class="job-info-summary-count">${data[1].count}</span>
    </dd>
`;
dlElements[1].innerHTML += hcode;

// 2-5 데이터 출력확인
// console.log(hcode);
