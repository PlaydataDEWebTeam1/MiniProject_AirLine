window.addEventListener("load",function(){
    
    //회원정보 초기화
    const memInfo = {
        
    };

    //변경버튼
    const changeButton = document.querySelector("#change");

    //아이디
    document.querySelector("#id").value = "SWIFT09";
    document.querySelector("#pw").value="123456";

    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;


    changeButton.onclick = function(){
        var url = "verify-password.html?";
        url = url.concat('id=',id);
        url = url.concat('&pw=',pw);
        location.href=url;
    }
})