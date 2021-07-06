window.addEventListener("load",function(){
    
    //회원정보 
    const name = getParameterByName('name');
    const memberId = getParameterByName('id');
    const memberPw = getParameterByName('pw');
    const sex = getParameterByName('sex');
    const email = getParameterByName('email');
    const mobile = getParameterByName('mobile');
    const birth = getParameterByName('birth');

    history.replaceState({}, null, location.pathname);

    //변경버튼
    const changeButton = document.querySelector("#change");

    
    document.querySelector("#id").value = memberId;
    document.querySelector("#pw").value=memberPw;
    document.querySelector("#name").value=name;
    document.querySelector("#gender").value=sex;
    document.querySelector("#birth").value=birth;
    document.querySelector("#email").value=email;
    document.querySelector("#phone").value = mobile;


    const id = document.querySelector("#id").value;
    const pw = document.querySelector("#pw").value;
    


    changeButton.onclick = function(){
        var url = "verify-password.html?";
        url = url.concat('id=',id);
        url = url.concat('&pw=',pw);
        location.href=url;
    }
})

/* 파라미터 받아 오기 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
