//scroll to top
$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".arrow-up").fadeIn();
    } else {
      $(".arrow-up").fadeOut();
    }
  });
  $(".arrow-up").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});
