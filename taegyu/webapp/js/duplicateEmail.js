/**
 * 이메일 중복 자바스크립트 파일 : js/duplicateEmail.js
 */

	/* 이메일 중복확인 새창열기 */
	function openEmailCheckWindow() {
		var specs = "width=600,height=200,top=300,left=500";
		var emailWin = window.open("duplicateEmail.html", "_blank", specs);
	}

	/* 회원들의 이메일 정보를 배열 선언 및 저장 구조 */
	var emailArray = ["user01@work.com", "user02@work.com", "user03@work.com"];
	
	/* 윈도우 로드 이벤트 */
	window.onload = function() {
		// 부모창의 이메일객체 가져오기
		var parentEmailElement = window.opener.document.getElementById("email1");
		var parentEmailElement2 = window.opener.document.getElementById("email2");
		
		// 자식창의 이메일객체 가져오기
		var childEmailElement = document.getElementById("email3");
		var childEmailElement2 = document.getElementById("email4");
		
		// 부모창의 입력 이메일을 자식창의 입력 이메일로 초기화 변경
		childEmailElement.value = parentEmailElement.value;
		childEmailElement2.value = parentEmailElement2.value;
		
		// 자식창의 이메일 포커스
		childEmailElement.focus();
		
		// 이메일 사용하기 버튼 비활성화
		document.getElementById("btn_use_email").disabled = true;
	}

	/* 이메일 중복여부 검증 */
	function emailCheck() {
		// 이메일 입력데이터 가져오기
		var email3 = document.getElementById("email3").value;
		var email4 = document.getElementById("email4").value;
		
		var email = email3.concat(email4);
		
		// 메세지 출력객체 가져오기
		var duplicateEmailMsgElement = document.getElementById("duplicateEmailMsg");
		
		// emailArray 크기만큼 반복 비교하면서 이메일 존재유무 체킹
		if (email3 == "" || email3.trim().length == 0) {
			duplicateEmailMsgElement.innerHTML = "이메일 아이디를 먼저 입력해주세요."
			duplicateEmailMsgElement.style.color = "red";
			document.getElementById("email3").focus();
			return false;
		} else {			
			for (index = 0; index < emailArray.length; index++) {
				if (emailArray[index] == email) {
					duplicateEmailMsgElement.innerHTML = "사용불가 이메일입니다.";
					duplicateEmailMsgElement.style.color = "red";
					document.getElementById("email3").focus();
					
					// 입력데이터 선택
					document.getElementById("email3").select();
					return;
				}
			}
		}
		
		if (email4 == "" || email4.trim().length == 0) {
			duplicateEmailMsgElement.innerHTML = "이메일 주소를 선택해주세요."
			duplicateEmailMsgElement.style.color = "red";
			document.getElementById("email4").focus();
			return false;
		}
		
		duplicateEmailMsgElement.innerHTML = "사용가능 이메일입니다.";
		duplicateEmailMsgElement.style.color = "green";
		
		// 이메일 사용하기 버튼 활성화
		document.getElementById("btn_use_email").disabled = false;
		
	}
	
	/* 이메일 입력시 이메일 중복검증 메세지 지우기 */
	function duplicateClearMsg() {
		// 메세지 출력객체 가져오기
		document.getElementById("duplicateEmailMsg").innerHTML = "";
		
		// 이메일 사용하기 버튼 비활성화
		document.getElementById("btn_use_email").disabled = true;
	}
	
	/* 이메일 사용하기 버튼 이벤트 
		-- 자식창에서 검증받은 아이디 정보를
		-- 부모창에 아이디로 초기화시켜주고
		-- 부모창에 아이디를 읽기전용으로 변경해주고
		-- 자식창 닫기
	*/
	function useEmail() {
		// 부모창의 이메일객체 가져오기
		var parentEmailElement = window.opener.document.getElementById("email1");
		var parentEmailElement2 = window.opener.document.getElementById("email2");
		
		// 자식창의 이메일객체 가져오기
		var childEmailElement = document.getElementById("email3");
		var childEmailElement2 = document.getElementById("email4");
		
		// 자식창의 검증받은 입력 이메일을 부모창의 입력 이메일로 변경 설정
		parentEmailElement.value = childEmailElement.value;
		parentEmailElement2.value = childEmailElement2.value;
		
		// 부모창의 검증받은 이메일을 변경 할 수 없도록 읽기전용으로 변경
		parentEmailElement.readOnly = "readOnly";
		
		// 자식창닫기
		window.close();
	}
	
	function duplicateSelectEmailChange(takeData) {
		console.log("takeData: ", takeData);
		
		var email3Element = document.getElementById("email3");
		var email4Element = document.getElementById("email4");
		var duplicateEmailMsg = document.getElementById("duplicateEmailMsg");
		
		if (email3Element.value == "" || email3Element.value.trim().length == 0) {
			duplicateEmailMsg.innerHTML = "이메일 아이디를 먼저 입력하시기 바랍니다.";
			duplicateEmailMsg.style.color = "red";
			email3Element.focus();
			return;
		}
		
		duplicateEmailMsg.innerHTML = "";
		
		switch(takeData) {
		case "none":
			email4Element.value = "";
			email4Element.readOnly = "readOnly";
			break;
			
		case "userInput":
			email4Element.value = "@";
			email4Element.readOnly = "";
			email4Element.focus();
			break;
			
		default:
			email4Element.value = takeData;
			email4Element.readOnly = "readOnly";
			break;
		}
	}