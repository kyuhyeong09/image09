$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'right', /* 위치 */
		navigationTooltips: ['메인', '두번째', '세번째', '네번째'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		

		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});
});