/**
 * 로그인 자바스크립트 파일 : js/login.js
 */

/* 회원들의 회원 정보를 배열 선언 및 저장 구조 */
//	var memberIdArray = ["user01", "user02", "user03"];
//	var user01Array = ["홍길동", "password01", "남", "user01@work.com", "010-1234-5678"];
//	var user01Array = ["신사임당", "password02", "여", "user02@work.com", "010-1234-5679"];
//	var user01Array = ["이순신", "password03", "남", "user03@work.com", "010-1234-5680"];
	
const memberArray = [
	{name : "홍길동", memberId : "user01", memberPw : "password01", sex : "남자", email : "user01@work.com", mobile : "010-1234-5678", birth : "1995-10-09"},
	{name : "신사임당", memberId : "user02", memberPw : "password02", sex : "여자", email : "user02@work.com", mobile : "010-1234-5679", birth : "1995-10-01"},
	{name : "이순신", memberId : "user03", memberPw : "password03", sex : "남자", email : "user03@work.com", mobile : "010-1234-5680",  birth : "1995-10-11"},
]

/* 윈도우 로드 이벤트 함수 */
window.onload = function() {
	// document.joinForm.memberId.focus();	
	initForm();
}

/*  */	
function checkLogin() {
	var loginMemberIdElement = document.getElementById("loginMemberId").value;
	var loginMemberPwElement = document.getElementById("loginMemberPw").value;
	console.log("loginMemberIdElement : " + loginMemberIdElement);
	console.log("loginMemberPwElement : " + loginMemberPwElement);
	
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

			//로그인할때 입력한 아이디값이 배열을 돌면서 같은 값이 있는지 체크
			//아이디 비교 : 찾는 아이디가 있으면 길이가 1인 배열, 없으면 0
			var sameIdMem = memberArray.filter(member => {
				return member.memberId === loginMemberIdElement;
			});
			
			console.log(sameIdMem);

			//찾는 값이 있다면 
			if(sameIdMem.length > 0){
				sameIdMem = sameIdMem[0];

				//전부 일치하면
				if (sameIdMem.memberPw === loginMemberPwElement){
					if(document.querySelector(".idValid") != null && document.querySelector(".pwValid") ){
						document.querySelector(".pwValid").style.display = 'none'
						document.querySelector(".idValid").style.display = 'none'
						loginSuccess(sameIdMem);
						return false;
					}else{
						loginSuccess(sameIdMem);
						return false;
					}

				//비밀번호 불일치
				}else{
					if(document.querySelector(".idValid") != null){
						document.querySelector(".idValid").style.display = 'none';
						
					}
					loginMemberPwMsgElement.innerHTML = "<span class='pwValid'>비밀번호를 다시 확인하시기 바랍니다.</span>";
					loginMemberPwMsgElement.style.color = "red";
					document.getElementById("loginMemberPw").focus();
					document.getElementById("loginMemberPw").select();
					return false;
				}
			//해당 아이디가 없으면
			}else{
				
				if(document.querySelector(".pwValid") != null) {
					document.querySelector(".pwValid").style.display = 'none';
					
				}

				loginMemberIdMsgElement.innerHTML = "<span class='idValid'>아이디를 다시 확인하시기 바랍니다.</span>";
				loginMemberIdMsgElement.style.color = "red";
				document.getElementById("loginMemberId").focus();
					
				document.getElementById("loginMemberId").select();
				return false;
			}
		}
	}


/* 로그인 리셋버튼 */
function clickReset2() {
	initForm();
	document.getElementById("joinForm").reset();
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




/* 파라미터로 값 넘겨주기 */
function loginSuccess(member){
	
	/*위치 수정 필요 */
	var url = "mainPageLogin.html?"

	
	url = url.concat('id=',member.memberId,'&');
	url = url.concat('pw=',member.memberPw,'&');
	url = url.concat('sex=',member.sex,'&');
	url = url.concat('email=',member.email,'&');
	url = url.concat('mobile=',member.mobile,'&');
	url = url.concat('name=',member.name,'&');
	url = url.concat('birth=',member.birth);
	

	location.href=url;
	
	return false;
}