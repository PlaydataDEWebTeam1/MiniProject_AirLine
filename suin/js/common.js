/**
 * 
 */


window.onload = function() {

}

/** 체크인 가능 */
function checkInConfirm() {
	alert("온라인 체크인은 항공편 출발 48시간 전부터 30분 전까지 이용 가능(국제선은1시간전)");
}

function openReservationInfo() {
	window.open("reservationInfo.html","_self");
	
}

/** 탑승객 정보 보여주기 */
function showPassengerInformation() {
	document.getElementById("inputPassengerInformation").style.diplay="";
	
	var parentBoardingDate= window.opener.document.getElementById("boardingDate");
	var childBoardingDate = document.getElementById("memberId");
	childBoardingDate.value = parentBoardingDate.value;
}

/** 탑승객 여권 정보 입력 블럭 보여주기 */
function showPassportInfo() {
	document.getElementById("inputPassportInfo").style.display="";
	document.getElementById("checkInStatus").value="진행중";
}

/** 여권 입력 정보 확인*/
function passportInfoConfirm() {
	var name = document.getElementById("passengerName").value;
	var passportNo = document.getElementById("passportNo").value;
	var nationality = document.getElementById("nationality").value;
	var passportIssuingCountry =document.getElementById("passportIssuingCountry").value;
	var sex = document.getElementById("sex").value;
	var passportExpiryDate = document.getElementById("passportExpiryDate").value;
	var birth = document.getElementById("birth").value;
	
	var confirmMsg = "\n이름: " + name + "\n여권번호: " + passportNo + "\n국적:" + nationality + "\n여권발급국가: " + passportIssuingCountry + "\n성별: "  + sex + "\n여권만료일: " + passportExpiryDate + "\n생년월일: " + birth;
	var answer = confirm(confirmMsg);
	if(answer) {
		window.open("seatChoice.html","_blank");
	}
}

/** 탑승권 열 보이기 순서 주의 페이지 열고 디스플레이 바꾸야됨 */
function showTicketColumn() {
	window.open("checkIn.html","_self");
	
	
}
