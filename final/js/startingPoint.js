/**
 * 
 */
/* 새창열기 */
function openStartPointWindow() {
		var specs = "width=550px, height=300px, top=300px, left=400px]";
		var idWin = window.open("startingPoint.html","_blank", specs);
		
	}

function inputStartPoint() {
		
		var paraentData = window.opener.document.getElementById("startingPoint");
		var point = document.getElementById("selectBox");
		
		paraentData.value = point.value;
		
		window.close();
		}