
window.addEventListener("load",() => {
    //아이디
    const id = getParameterByName('id');
    //비교할 비밀번호
    const comparePw = getParameterByName('pw');

    //취소버튼 
    const cancelButton = document.querySelector("#cancel");
    //확인 버튼 
    const verifyButton = document.querySelector("#verify")

    
    //주소창에 파라미터 값 지우기
   // history.replaceState({}, null, location.pathname);

    //회원 아이디창에 아이디 나타내기
    document.querySelector("#mem-id").value = id;
    
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //취소버튼 클릭 시 
    cancelButton.onclick = () => {
        location.href="my-page.html"
        return false;
    };
    
    //확인버튼 클릭 시
    verifyButton.onclick = () => {
        //입력한 비밀번호
        var inputPw = document.querySelector("#mem-pw").value;
        //필수입력항목입니다.
        var necInfo = document.querySelector("#nec-info");
        //비밀번호를 확인해주세요.
        var verifyPw = document.querySelector("#re-verify-pw");


        //비밀번호 공백
        if(inputPw == "" ){
            console.log(comparePw);
            console.log(inputPw);

            verifyPw.style.display = "none";
            necInfo.style.display = "inline-block"
            return false;

         //비밀번호 다를때
         }else if(comparePw != inputPw){
             console.log("asas");
            necInfo.style.display = "none";
            verifyPw.style.display = "inline-block";
            return false;
        
        //비밀번호 일치
         }else{
            location.href = "modify.html";
            return false;
         }
      
    };

})


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
