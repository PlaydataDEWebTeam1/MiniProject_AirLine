/**
 * 
 */
/* 새창열기 */
function openDepartureWindow() {
		var specs = "width=550px, height=300px, top=300px, left=400px]";
		var idWin = window.open("departure.html","_blank", specs);
		
	}

function inputDeparture() {
		
		var paraentData = window.opener.document.getElementById("departure");
		var point = document.getElementById("selectBox");
		
		paraentData.value = point.value;
		
		window.close();
		}