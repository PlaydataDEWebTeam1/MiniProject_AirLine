window.addEventListener("load",() =>{
    const verifyButton = document.getElementById("verify");
    
    //확인버튼 클릭 시
    verifyButton.addEventListener('click',() => {
        modal('my_modal');
    })

    //취소버튼 클릭 시
})


/*모달 띄우기 */

function modal(id) {
    /*화면 맨위로 */
    var zIndex = 9999;
    /* 숨겨진 div 가져옴 */
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });

    /* 전체 배경 수정 */
    document.body.append(bg);

    
    document.querySelector(".modal_close_btn").style.cursor = 'pointer';

    /* 스크롤 무력화 */
    document.body.style.overflow = 'hidden';

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal.querySelector('.modal_close_btn').addEventListener('click', function() {
        bg.remove();
        document.body.style.overflow = ''

        modal.setStyle({
            display : 'none',

        })
    });

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}

/* CSS 셋팅 */
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};
