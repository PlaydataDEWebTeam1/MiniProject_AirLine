/**
 * 회원가입 자바스크립트 파일 : js/joinMember.js
 */

/* 윈도우 로드 이벤트 함수 */
	window.onload = function() {
		// document.joinForm.memberId.focus();	
		initForm();
	}
	
	/* 폼 초기화 함수 */
	function initForm() {
		// 폼양식 > 입력항목 이름 
		//document.joinForm.memberId.focus();
		
		// 폼양식 > 입력항목 name
		document.getElementById("name").focus();
		
		// 이메일 도메인주소 읽기전용 설정
		document.getElementById("email2").readOnly = "readOnly";
		
		clearMsg();
	}
	
	/* 메세지 출력 지우기 */
	function clearMsg() {
		document.getElementById("nameMsg").innerHTML = "";
		document.getElementById("memberIdMsg").innerHTML = "";
		document.getElementById("memberPwMsg").innerHTML = "";
		document.getElementById("memberPwConfirmMsg").innerHTML = "";
		document.getElementById("sexMsg").innerHTML = "";
		document.getElementById("email1Msg").innerHTML = "";
		document.getElementById("mobileMsg").innerHTML = "";
	}

	/* reset button 이벤트 : button, <a>, <img> */
	function clickReset2() {
		initForm();
		// 명시적으로 form reset 요청 해야함 
		document.getElementById("joinForm").reset();
	}
			
	/* 입력데이터 검증 : button, <a>, <img> 처리 방법 
		1. 필수입력항목 : 이름, 아이디, 비밀번호, 비밀번호 확인, 성별 check, 휴대폰 번호
			=> 입력항목객체.value
	*/		
	function checkForm2() {
		// 아이디 입력 데이터 가져오기 : id
		var memberId = document.getElementById("memberId").value;
		console.log("memberId: ", memberId.length);
		// 데이터 검증
		if (memberId == "" || memberId.trim().length == 0) {
			document.getElementById("memberId").focus();
			document.getElementById("memberIdMsg").innerHTML = "아이디를 입력하세요";
			document.getElementById("memberIdMsg").style.color = "red";
			document.getElementById("memberId").value = "";
			//return false; // input type="submit"
			return;  // button, <a>, <img>
		}
		memberId = memberId.trim();
		console.log("memberId: ", memberId.length);
		
		
		// 비밀번호 입력 데이터 가져오기 : name
		var memberPw = document.joinForm.memberPw.value;
		console.log("memberPw: ", memberPw);
		
		if (memberPw == "" || memberPw.trim().length == 0) {
			document.getElementById("memberPw").focus();
			document.getElementById("memberPwMsg").innerHTML = "비밀번호를 입력하세요";
			document.getElementById("memberPwMsg").style.color = "red";
			document.getElementById("memberPw").value = "";
			//return false; // input type="submit"
			return;
		}
		memberPw = memberPw.trim();
		
		// 비밀번호 확인 입력 데이터 가져오기 :
		var memberPwConfirm = document.getElementById("memberPwConfirm").value;
		console.log("memberPwConfirm: ", memberPwConfirm);
		
		if (memberPwConfirm == "" || memberPwConfirm.trim().length == 0) {
			document.getElementById("memberPwConfirm").focus();
			document.getElementById("memberPwConfirmMsg").innerHTML = "비밀번호확인을 입력하세요";
			document.getElementById("memberPwConfirmMsg").style.color = "red";
			document.getElementById("memberPw").value = "";
			//return false; // input type="submit"
			return;
		}
		memberPwConfirm = memberPwConfirm.trim();
		
		// 이름 입력 데이터 가져오기 :
		var name = document.getElementById("name").value;
		console.log("name : ", name);
		
		if (name == "" || name.trim().lenght == 0) {
			document.getElementById("name").focus();
			document.getElementById("nameMsg").innerHTML = "이름을 입력하세요";
			document.getElementById("nameMsg").style.color = "red";
			document.getElementById("name").value = "";
			return false; // input type="submit"
		}
		name = name.trim();
		document.getElementById("nameMsg").innerHTML = "";
		
		// 성별 체크 여부확인 :
		var checkbox1 = document.getElementById("sex1");
		var checkbox2 = document.getElementById("sex2");
		
		if(!(checkbox1.checked || checkbox2.checked)) {
			document.getElementById("sexMsg").innerHTML = "성별을 선택해주세요.";
			document.getElementById("sexMsg").style.color = "red";
			return false;
		}
		document.getElementById("sexMsg").innerHTML = "";
		
		// 이메일 입력 데이터 가져오기
		var email1 = document.getElementById("email1").value;
		
		if (email1 == "" || email1.trim().lenght == 0) {
			document.getElementById("email1").focus();
			document.getElementById("email1Msg").innerHTML = "이메일 아이디를 입력하세요";
			document.getElementById("email1Msg").style.color = "red";
			document.getElementById("email1").value = "";
			return false; // input type="submit"
		}
		document.getElementById("email1Msg").innerHTML = "";
		
		// 휴대폰 입력 데이터 가져오기 :
		var mobile = document.getElementById("mobile").value;
		console.log("mobile : ", mobile);
		
		if (mobile == "" || mobile.trim().lenght == 0) {
			document.getElementById("mobile").focus();
			document.getElementById("mobileMsg").innerHTML = "휴대폰 번호를 입력하세요";
			document.getElementById("mobileMsg").style.color = "red";
			document.getElementById("mobile").value = "";
			return false; // input type="submit"
		}
		document.getElementById("mobileMsg").innerHTML = "";

		// 실습 : 비밀번호와 비밀번호확인 매칭 검증
		if (memberPw != memberPwConfirm) {
			document.getElementById("memberPw").focus();
			document.getElementById("memberPwMsg").innerHTML = "비밀번호와 비밀번호 확인이 동일하지 않습니다.";
			document.getElementById("memberPwMsg").style.color = "red";
			//return false;
			return;
		}
		
		// 아이디 중복여부 검증 완료 여부 체크
		var checkMemberIdResult = document.getElementById("checkMemberId").value;
		if (checkMemberIdResult != "SUCCESS") {
			document.getElementById("memberId").focus();
			document.getElementById("memberIdMsg").innerHTML = "아이디 중복여부를 확인하시기 바랍니다.";
			document.getElementById("memberIdMsg").style.color = "red";
			return;			
		}
		
		// 명시적으로 form submit 요청 해야함 
		document.getElementById("joinForm").submit();
	}
	
	/* 아이디 중복확인 새창열기 */
	function openIdCheckWindow() {
		var specs = "width=400,height=300,top=300,left=500";
		var idWin = window.open("duplicateMemberId.html", "_blank", specs);
	}

	/* 이메일 중복확인 새창열기 */
	function openEmailCheckWindow() {
		var specs = "width=600,height=200,top=300,left=500";
		var emailWin = window.open("duplicateEmail.html", "_blank", specs);
	}
		
	/* 비밀번호 표시 : 보인기 / 감추기 이벤트 
		1. 비밀번호표시 체크박스 객체 가져오기
		2. 비밀번호 객체 가져오기
		3. 비밀번호확인 객체 가져오기
		
		4. 체크박스 체킹(checked == true) 
			=> type='text'
		5. 체크박스 해제(checked == false)
			=> type='password'
	*/
	function viewMemberPw() {
		var isVisablePasswordElement = document.getElementById("isVisablePassword");
		var memberPwElement = document.getElementById("memberPw");
		var memberPwConfirmElement = document.getElementById("memberPwConfirm");
		
		if (isVisablePasswordElement.checked) {
			// 4. 체크박스 체킹(checked == true) 
			memberPwElement.type = "text";
			memberPwConfirmElement.type = "text";
		} else {
			// 5. 체크박스 해제(checked == false)
			memberPwElement.type = "password";
			memberPwConfirmElement.type = "password";
		}
	}
			
	/* [실습]
		## 이메일 도메인을 선택하면 해당 도메인 주소를 이메일주소로 자동 초기화
		-- select 
			>> onchange
			>> <option>네이버</option>
			>> <option value="@naver.com">네이버</option>
			
		-- 읽기전용 : readOnly	
	*/
	function selectEmailChange(takeData) {
		console.log("takeData: ", takeData);
		
		var email1Element = document.getElementById("email1");
		var email2Element = document.getElementById("email2");
		var email1Msg = document.getElementById("email1Msg");
		
		if (email1Element.value == "" || email1Element.value.trim().length == 0) {
			email1Msg.innerHTML = "이메일 아이디를 먼저 입력하시기 바랍니다.";
			email1Msg.style.color = "red";
			email1Element.focus();
			return;
		}
		
		email1Msg.innerHTML = "";
		
		switch(takeData) {
		case "none":
			email2Element.value = "";
			email2Element.readOnly = "readOnly";
			break;
			
		case "userInput":
			email2Element.value = "@";
			email2Element.readOnly = "";
			email2Element.focus();
			break;
			
		default:
			email2Element.value = takeData;
			email2Element.readOnly = "readOnly";
			break;
		}
	}
	
	/* 비밀번호확인 포커스를 잃었을때 비밀번호와 동일한지 검증 */
	function checkMappingMemberPw() {
		var memberPw = document.getElementById("memberPw").value;
		var memberPwConfirm = document.getElementById("memberPwConfirm").value;
		
		if (memberPw != memberPwConfirm) {
			document.getElementById("memberPw").focus();
			document.getElementById("memberPwMsg").innerHTML = "비밀번호와 비밀번호 확인이 동일하지 않습니다.";
			document.getElementById("memberPwMsg").style.color = "red";
			
			// 입력 데이터 선택
			document.getElementById("memberPw").select()
			return false; 
		}
		
		document.getElementById("memberPwMsg").innerHTML = "";
	}
	
	/* 성별 체크 박스 하나만 선택가능하도록 하기 */
	function checkOnlyOne(element) {
		const checkboxes = document.joinForm.sex;
		
		checkboxes.forEach((cb) => {
			cb.checked = false;
		})
		
		element.checked = true;
	}
	