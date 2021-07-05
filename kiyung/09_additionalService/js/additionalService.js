/**
 * 
 */
/* 새창열기 */
function openMealWindow() {
		var specs = "width=550px, height=300px, top=300px, left=400px]";
		var idWin = window.open("meal.html","_blank", specs);
		
	}

function inputMeal() {
		
		var paraentData = window.opener.document.getElementById("input_meal");
		var point = document.getElementById("selectBox");
		
		paraentData.value = point.value;
		
		window.close();
		}
		
function openBaggageWindow() {
		var specs = "width=550px, height=300px, top=300px, left=400px]";
		var idWin = window.open("baggage.html","_blank", specs);
		
	}

function inputBaggage() {
		
		var paraentData = window.opener.document.getElementById("input_baggage");
		var point = document.getElementById("selectBox");
		
		paraentData.value = point.value;
		
		window.close();
		}
		