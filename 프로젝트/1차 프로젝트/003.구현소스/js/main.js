/* 공통처리함수 불러오기 */
import * as com from "./common.js";

/* 레슨 데이터 불러오기 */
import * as lesson from "../data/lesson_data.js";

/****************************************************
 * 2. 구인정보 -> 전체 페이지 상단 채용정보 데이터 넣기
 *****************************************************/

// 2-0 데이터 출력확인
// console.log(lesson.jobSummaryInfoData);

// 2-1 jobSummaryInfoData 배열 데이터 불러오기
const data = lesson.jobSummaryInfoData;

// 2-2 jobSummaryInfoData 삽입할 태그 불러오기
const dlElements = com.myFn.qsa(".job-info-summary-tc dl");
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

// 메인페이지에서 에러남 수정필요
// dlElements[0].innerHTML += hcode;

// 두 번째 dl에 두 번째 데이터 추가
hcode = `
    <dt>
        <span class="job-info-summary-title">${data[1].alljob}</span>
    </dt>
    <dd>
        <span class="job-info-summary-count">${data[1].count}</span>
    </dd>
`;
// 메인페이지에서 에러남 수정필요
// dlElements[1].innerHTML += hcode;

// 2-5 데이터 출력확인
// console.log(hcode);
