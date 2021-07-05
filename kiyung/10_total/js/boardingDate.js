/**
 * 
 */
/* 새창열기 */
function openBoardingDateWindow() {
		var specs = "width=550px, height=400px, top=300px, left=400px]";
		var idWin = window.open("boardingDate.html","_blank", specs);
		
	}

function inputGoDate() {
		
		var paraentData = window.opener.document.getElementById("goDate");
		var point = document.getElementById("goDate");
		
		paraentData.value = point.value;
		
		}
		
function inputComeDate() {
		
		var paraentData = window.opener.document.getElementById("comeDate");
		var point = document.getElementById("comeDate");
		
		paraentData.value = point.value;
		
		window.close();
		}