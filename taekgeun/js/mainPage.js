

/*
name
memberId
memberPw
sex
email
mobile
*/


window.addEventListener("load",() => {
    const name = getParameterByName('name');
    const memberId = getParameterByName('id');
    const memberPw = getParameterByName('pw');
    const sex = getParameterByName('sex');
    const email = getParameterByName('email');
    const mobile = getParameterByName('mobile');
    const birth = getParameterByName('birth');

    history.replaceState({}, null, location.pathname);

    
    var myPageBtn = document.getElementById("myPage")

    
    myPageBtn.onclick = () => {
        /*위치 수정 필요 */
        var url = "my-page.html?"

	
        url = url.concat('id=',memberId,'&');
        url = url.concat('pw=',memberPw,'&');
        url = url.concat('sex=',sex,'&');
        url = url.concat('email=',email,'&');
        url = url.concat('mobile=',mobile,'&');
        url = url.concat('name=',name,'&');
        url = url.concat('birth=',birth)
    
    
        location.href=url;
        return false;
    }

})



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}