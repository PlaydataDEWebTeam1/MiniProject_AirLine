/**
 * 로그인 자바스크립트 파일 : js/login.js
 */

/* 회원들의 회원 정보를 배열 선언 및 저장 구조
	var memberIdArray = ["user01", "user02", "user03"];
	var memberPwArray = ["password01", "password02", "password03"];
*/	

/* 회원들의 회원 정보를 배열 선언 및 저장 구조 */
	const memberArray = [
		{name : "홍길동", memberId : "user01", memberPw : "password01", sex : "남", email : "user01@work.com", mobile : "010-1234-5678"},
		{name : "신사임당", memberId : "user02", memberPw : "password02", sex : "여", email : "user02@work.com", mobile : "010-1234-5679"},
		{name : "이순신", memberId : "user03", memberPw : "password03", sex : "남", email : "user03@work.com", mobile : "010-1234-5680"},
	]
	
/* 윈도우 로드 이벤트 함수 */
	window.onload = function() {
		// document.joinForm.memberId.focus();	
		initForm();
	}
	
/* 로그인 함수 */	
	function checkLogin() {
		var loginMemberIdElement = document.getElementById("loginMemberId").value;
		var loginMemberPwElement = document.getElementById("loginMemberPw").value;
		
		// 메세지 출력객체 가져오기
		var loginMemberIdMsgElement = document.getElementById("loginMemberIdMsg");
		var loginMemberPwMsgElement = document.getElementById("loginMemberPwMsg");
		
		// memberIdArray 크기만큼 반복 비교하면서 아이디 존재유무 체킹
		if (loginMemberIdElement == "" || loginMemberIdElement.trim().length == 0) {
			loginMemberIdMsgElement.innerHTML = "아이디를 입력하세요.";
			loginMemberIdMsgElement.style.color = "red";
			document.getElementById("loginMemberId").focus();
			return false;
		} else {
			memberArray.filter(member => {
				if (member.memberId === loginMemberIdElement) {
					if (member.memberPw === loginMemberPwElement) {
						location.href ="loginResult.html";
                  		return false;
					} else {
						loginMemberPwMsgElement.innerHTML = "입력정보를 다시 확인하시기 바랍니다.";
						loginMemberPwMsgElement.style.color = "red";
						document.getElementById("loginMemberPw").focus();
					
						document.getElementById("loginMemberPw").select();
						return;
					}
				} else {
					loginMemberIdMsgElement.innerHTML = "입력정보를 다시 확인하시기 바랍니다.";
					loginMemberIdMsgElement.style.color = "red";
					document.getElementById("loginMemberId").focus();
					
					document.getElementById("loginMemberId").select();
					return;
				}
			})
		}
	}
	
	
/* 로그인 함수	
	function checkLogin() {
		var loginMemberIdElement = document.getElementById("loginMemberId").value;
		var loginMemberPwElement = document.getElementById("loginMemberPw").value;
		console.log(loginMemberIdElement);
		console.log(loginMemberPwElement);
		
		// 메세지 출력객체 가져오기
		var loginMemberIdMsgElement = document.getElementById("loginMemberIdMsg");
		var loginMemberPwMsgElement = document.getElementById("loginMemberPwMsg");
		
		// memberIdArray 크기만큼 반복 비교하면서 아이디 존재유무 체킹
		if (loginMemberIdElement == "" || loginMemberIdElement.trim().length == 0) {
			loginMemberIdMsgElement.innerHTML = "아이디를 입력하세요.";
			loginMemberIdMsgElement.style.color = "red";
			document.getElementById("loginMemberId").focus();
			return false;
		} else {
			for (index = 0; index < memberIdArray.length; index++){
				if (memberIdArray[index] == loginMemberIdElement) {
					if (memberPwArray[index] == loginMemberPwElement) {
						document.getElementById("loginMemberId").select();
						document.getElementById("loginMemberPw").select();
						return;
					} else {
						loginMemberPwMsgElement.innerHTML = "입력정보를 다시 확인하시기 바랍니다.";
						loginMemberPwMsgElement.style.color = "red";
						document.getElementById("loginMemberPw").focus();
						return false;
					}
				} else {
					loginMemberIdMsgElement.innerHTML = "아이디를 입력하세요.";
					loginMemberIdMsgElement.style.color = "red";
					document.getElementById("loginMemberId").focus();
					return false;
				}
			}
		}
	}
*/
				
/* 로그인 리셋버튼 */
	function clickReset() {
		initForm();
		document.getElementById("loginForm").reset();
	}
	
/* 폼 초기화 함수 */
	function initForm() {
		document.getElementById("loginMemberId").focus();
		clearMsg();
	}
	
/* 메세지 출력 지우기 */
	function clearMsg() {
		document.getElementById("loginMemberIdMsg").innerHTML = "";
		document.getElementById("loginMemberPwMsg").innerHTML = "";
	}