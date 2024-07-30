$(function () {
  //모바일 서브메뉴 열고닫기

  var on_off = false;
  $("label#menu").click(function () {
    on_off = !on_off;
    if ($(this).children("input").is(":checked")) {
      $("#mobile_menu").stop().animate({ left: "0" }, 1000, "easeOutExpo");
    } else {
      $("#mobile_menu").stop().animate({ left: "100%" }, 1000, "easeOutExpo");
    }
  });
});
