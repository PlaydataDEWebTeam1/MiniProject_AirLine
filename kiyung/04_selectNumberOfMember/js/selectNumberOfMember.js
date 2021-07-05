/**
 * 
 */
/* 새창열기 */
function openNumberWindow() {
		var specs = "width=550px, height=300px, top=300px, left=400px]";
		var idWin = window.open("selectNumberOfMember.html","_blank", specs);
		
	}

function useMemberCount() {
		
		var parentDataAdult = window.opener.document.getElementById("adultNumber");
		var parentDataChild = window.opener.document.getElementById("childNumber");
		var parentDataBaby = window.opener.document.getElementById("babyNumber");
		
		var adultMember = document.getElementById("adult");
		var childMember = document.getElementById("child");
		var babyMember = document.getElementById("baby");
		
		parentDataAdult.value = adultMember.value;
		parentDataChild.value = childMember.value;
		parentDataBaby.value = babyMember.value;
		
		window.close();
		}