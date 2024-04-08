/* 공통 함수 불러오기 */
import common from "./common_func.js";

/* 레슨모아 데이터 객체 불러오기 */
import * as lessonData from "../data/lesson_data.js";

/****************************************************
 * 1. 구인정보페이지 상단 채용정보 데이터 넣기
 *****************************************************/

/* 1-0 데이터 출력확인*/
console.log(lessonData.jobSummaryInfoData);

/* 1-1 jobSummaryInfoData 배열 데이터 불러오기 */
const data = lessonData.jobSummaryInfoData;

/* 1-2 jobSummaryInfoData 삽입할 태그 불러오기 */
const jobInfoSummaryTc = common.qs(".job-info-summary-tc");

/* 1-3 html code 삽입 변수 초기화 */
let hcode = "";

/* 1-4 jobSummaryInfoData forEach문으로 데이터 삽입 */
data.forEach((v) => {
  hcode += `
    <dl>
        <dt>
            <span class="job-info-summary-title">${v.alljob}</span>
        </dt>
        <dd>
            <span class="job-info-summary-count">${v.count}</span>
        </dd>
    </dl>
`;
}); ////// forEach ////////////////////

/* 1-5 데이터 출력확인 */
// console.log(hcode);

// 1-6. 데이터 실제 html 코드에 삽입하기
jobInfoSummaryTc.innerHTML = hcode;
