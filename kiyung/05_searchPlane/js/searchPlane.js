/**
 * 
 */
/* 새창열기 */


function openSearchPlaneWindow() {
		
	var idWin = window.open("searchPlane.html","_blank");
}

window.onload = function() {
		
	var parentStartingPoint = window.opener.document.getElementById("startingPoint");
	var parentDeparture = window.opener.document.getElementById("departure");
	var parentGoDate = window.opener.document.getElementById("goDate");
	var parentComeDate = window.opener.document.getElementById("comeDate");
		
	var childStartingPoint = document.getElementById("startingPoint");
	var childDeparture = document.getElementById("departure");
	var childGoDate = document.getElementById("goDate");
	var childComeDate = document.getElementById("comeDate");
		
	var childplaneFee = document.getElementById("planeFee");
		
	childStartingPoint.value = parentStartingPoint.value;
	childDeparture.value = parentDeparture.value;
	childGoDate.value = parentGoDate.value;
	childComeDate.value = parentComeDate.value;
	
	childplaneFee.value = "600,000 원"	
		
}