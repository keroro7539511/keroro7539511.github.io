$(document).ready(function () {
    //將#sel元素綁定mouseenter和mouseleave事件
    //mouseenter和mouseleave事件被觸發時會執行fnToggleClass函式
    //滑鼠碰到#sel顯示#about關於我們選單
    //滑鼠離開#sel隱藏#about關於我們選單
    $("#sel").on({
        "mouseenter": fnToggleClass,
        "mouseleave": fnToggleClass
    });
});

function fnToggleClass() {
    //切換顯示#about，即關於我們的選單
    $("#about").toggleClass("active");
}
